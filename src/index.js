var clusterfck = require("@mr.y/clusterfck");


function hexToRgb(hex) {
		  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		  return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		  } : null;
		}


		function readFileAsync(file) {
		  return new Promise((resolve, reject) => {
			let reader = new FileReader();

			reader.onload = () => {
			  resolve(reader.result);
			};

			reader.onerror = reject;

			reader.readAsDataURL(file);
		  })
		}
		
		function getColor(n) {
		  return new Promise((resolve, reject) => {
			  var url = "https://api.noopschallenge.com/hexbot?count=" + n;
			 
			$.ajax({
			  type: "GET",
			  url:url,
			  success: (data,status,jqxhr) => {resolve(data)}
			});
		  })
		}
		
		$("#file").change(async function(evt){
		var files = evt.target.files;
			var kmeans = new clusterfck.Kmeans();
			var dataURL = await readFileAsync(files[0]);
			
			$("#color").attr("src",dataURL);
			
			
			let loaded_image = await IJS.Image.load(dataURL);
			let image = loaded_image.colorDepth(8);
			
			let color_pixels = image.getPixelsArray();
			var colod_mode = color_pixels[0].length;
			
			// Get colors
			let color_count = parseInt($("#color_count").val());
			let color_text = await getColor(color_count);
			let colors = [];
			for (var  i = 0; i< color_text.colors.length; i++)
			{
				var c = hexToRgb(color_text.colors[i].value);
				colors.push([c.r,c.g,c.b]);
			}
			
			
			
			var clusters = kmeans.cluster(color_pixels, color_count);
			
			var indexes = [];
			if (colod_mode == 3)
			{
				for (var idxPixel = 0; idxPixel < color_pixels.length; idxPixel++)
				{
					var pixel = color_pixels[idxPixel];
					var clusterIndex = kmeans.classify(pixel);
					indexes.push(clusterIndex);
					
					image.setPixel(idxPixel,colors[clusterIndex]);
					
				}
			}else
			{
				for (var idxPixel = 0; idxPixel < color_pixels.length; idxPixel++)
				{
					var pixel = color_pixels[idxPixel];
					var clusterIndex = kmeans.classify(pixel);
					indexes.push(clusterIndex);
					
					image.setPixel(idxPixel,[colors[clusterIndex][0],colors[clusterIndex][1],colors[clusterIndex][2],pixel[3]]);
					
				}
			}
			
			
			
			$("#result").attr("src", image.toDataURL());
			
			
		});