			document.getElementById("switch-multipleDom").addEventListener("change", function(){
				if(this.checked){
					//document.getElementById("numParcelDom").disabled = false;
					document.getElementById("manyParcelDivDom").hidden = false;
					document.getElementById("singleParcelDivDom").hidden = true;
				}else{
					document.getElementById("manyParcelDivDom").hidden = true;
					document.getElementById("singleParcelDivDom").hidden = false;
					//set value to 1 during submission!
				}
			});
			
			/*
			document.getElementById("switch-multipleInt").addEventListener("change", function(){
				if(this.checked){
					document.getElementById("numParcelInt").disabled = false;
					document.getElementById("numParcelIntCont").hidden = false;
				}else{
					document.getElementById("numParcelInt").disabled = true;
					document.getElementById("numParcelInt").value = null;
					document.getElementById("numParcelIntCont").hidden = true;
					//set value to 1 during submission!
				}
			});

			document.getElementById("option-domestic").onclick = function(){
				document.getElementById("domesticContainer").hidden = false;
				document.getElementById("internationalContainer").hidden = true;
			}

			document.getElementById("option-international").onclick = function(){
				document.getElementById("internationalContainer").hidden = false;
				document.getElementById("domesticContainer").hidden = true;
			}
			*/
			function addrow(targetTable){

				if(document.getElementById("manyDom-parName").value == '' || document.getElementById("manyDom-parVal").value == '' || document.getElementById("manyDom-actWeight").value == '' || document.getElementById("manyDom-length").value == '' || document.getElementById("manyDom-width").value == '' || document.getElementById("manyDom-height").value == ''){
					alert("Please fill every fields in Parcel Details!");
					return;
				}

				var table = document.getElementById(targetTable);
				var targetRow = table.rows.length;

				var newRow = table.insertRow(targetRow);
				var colName = newRow.insertCell(0);
				var colValue = newRow.insertCell(1);
				var colActWeight = newRow.insertCell(2);
				var colLength = newRow.insertCell(3);
				var colWidth = newRow.insertCell(4);
				var colHeight = newRow.insertCell(5);
				var colVolWeight = newRow.insertCell(6);

				colName.innerHTML = document.getElementById("manyDom-parName").value;
				colValue.innerHTML = document.getElementById("manyDom-parVal").value;
				colActWeight.innerHTML = document.getElementById("manyDom-actWeight").value;
				colLength.innerHTML = document.getElementById("manyDom-length").value;
				colWidth.innerHTML = document.getElementById("manyDom-width").value;
				colHeight.innerHTML = document.getElementById("manyDom-height").value;

				colVolWeight.innerHTML = (document.getElementById("manyDom-height").value * document.getElementById("manyDom-width").value * document.getElementById("manyDom-length").value) / 5000;

			}

			function clearTable(targetTable){
				var table = document.getElementById(targetTable);
				var n = table.rows.length - 1;	
				while(n >= 1){
					table.deleteRow(n);
					n--;
				}
			}

			function calcVolWeight (targetField){
				if(document.getElementById("singleDom-length").value == '' || document.getElementById("singleDom-width").value == '' || document.getElementById("singleDom-height").value == ''){
					alert("Please fill every dimension fields in Parcel Details!");
					return;
				}

				document.getElementById(targetField).value = (document.getElementById("singleDom-length").value * document.getElementById("singleDom-width").value * document.getElementById("singleDom-height").value) / 5000;
			}
			//meow
			function clearParcelFields (targetField){
				document.getElementById(targetField+"-parName").value = '';
				document.getElementById(targetField+"-parVal").value = '';
				document.getElementById(targetField+"-actWeight").value = '';
				document.getElementById(targetField+"-length").value = '';
				document.getElementById(targetField+"-width").value = '';
				document.getElementById(targetField+"-height").value = '';

				if(targetField == 'singleDom' || targetField == 'singleInt')
					document.getElementById(targetField+"-volWeight").value = '';
			}

			function submitForm (){
				alert("Requires back end dev!");
			}