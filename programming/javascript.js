$(document).ready(function(){
    
	
	//function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); };
	// slight update to account for browsers not supporting e.which
	//this code handles the F5/Ctrl+F5/Ctrl+R
    document.onkeydown = checkKeycode
    function checkKeycode(e) {
        var keycode;
        if (window.event)
            keycode = window.event.keyCode;
        else if (e)
            keycode = e.which;

       
        // IE
        else if ($.browser.msie) {
            if (keycode == 116 || (window.event.ctrlKey && keycode == 82)) {
                window.event.returnValue = false;
                window.event.keyCode = 0;
                window.status = "Refresh is disabled";
            }
        }
    }
	
	
	// Refresh End
		
	//var id = $(this).closest('.tblcl').attr('id');
	//alert(id);
	
	$('.tblNoDiagTestRan').show();
	$('.tblEpsaDiagTest').hide();
	$('.tblOtherDiagTestRan').hide();
	
	$('.tblEpsaErrorCodes').hide();
	

	$('.tblContainerCustInfo').hide();
	$('.tblOpening').hide();
	$('.tblTs').hide();
	
	$('#divTroubleshootingStepsContainer').hide();
	
	//$("#taTroubleshootingSteps").hide();
	
	//$(".tblDispatch").hide();
	
	$('.tblDispatchContainer').hide();
	
	$('.tblPartsToReplace').hide();
	$('.tblDispatchPOS').hide();
	$('.tblDispatchNBD').hide();
	$('.tblDispatchRTD').hide();
	$('.tblVprsk').hide();
	$('.tblL2Name').hide();
	$('.tblHddConcent').hide();
	$('.tblAddress').hide();
	$('.tblDispatchNotes').hide();
	
	
	$('.tblStamps').hide();
	$('.tblClosing').hide();
	$('.tblEmail').hide();
	$('.tblLogs').hide();
	$('.tblCopyText').hide();
	
	
	//$(document).on("keydown", disableF5);
	
	//alert(node);
	//var node = document.getElementById('#nav-container').childNodes;
	//alert(node);
	
	//var node = $( "#nav-container" ).children().removeClass('active');
	//alert("Remove Class");
	
	//var node = $( "#nav-container" ).children().addClass('active');
	//alert("Add Class");
	
	// Function Generate Data
	
	
	
	
	
	
	
	$('.tblMenu td').click(function() {
		
		//$('this').parent('.tblcl').css("background-color", "yellow");
		//$('this').css("background-color", "yellow");
		
		//alert($('this').parent('.tblcl').attr('id'));
		
		var id = $(this).closest('.tblcl').attr('id');
		
		//alert(id);
		
		$("#" + id + " .tblMenu tr").children().removeClass('tdActiveMenu');
		//$(id).addClass('tdActiveMenu');
		
		//$(".tblMenu tr").children().removeClass('tdActiveMenu');
		$(this).addClass('tdActiveMenu');
		
		
		
		
		
		switch($(this).attr('id')) {
			case "tdMenuSession":
				$("#" + id + " .tblSessionPorperties").show();
				$("#" + id + " .tblContainerCustInfo").hide();
				$("#" + id + " .tblOpening").hide();
				$("#" + id + " .tblTs").hide();
				
				//$(".tblDispatch").hide();
				//$(".tblPartsToReplace").hide();
				//$(".tblDispatchPOS").hide();
				//$(".tblDispatchNBD").hide();
				//$(".tblDispatchRTD").hide();
				//$(".tblVprsk").hide();
				//$(".tblL2Name").hide();
				//$(".tblHddConcent").hide();
				
				//$(".tblAddress").hide();
				//$(".tblDispatchNotes").hide();
				
				$("#" + id + " .tblDispatchContainer").hide();
				
				$("#" + id + " .tblStamps").hide();
				$("#" + id + " .tblClosing").hide();
				$("#" + id + " .tblEmail").hide();
				$("#" + id + " .tblLogs").hide();
				$("#" + id + " .tblCopyText").hide();
				
				$("#" + id + " #taCopyText").val("");
				
				break;
			case "tdMenuOpening":
				$("#" + id + " .tblSessionPorperties").hide();
				$("#" + id + " .tblContainerCustInfo").show();
				$("#" + id + " .tblOpening").show();
				$("#" + id + " .tblTs").hide();
				
				$("#" + id + " .tblDispatchContainer").hide();
				
				// $(".tblDispatch").hide();
				// $(".tblPartsToReplace").hide();
				// $(".tblDispatchPOS").hide();
				// $(".tblDispatchNBD").hide();
				// $(".tblDispatchRTD").hide();
				// $(".tblVprsk").hide();
				// $(".tblL2Name").hide();
				// $(".tblHddConcent").hide();
				
				// $(".tblAddress").hide();
				// $(".tblDispatchNotes").hide();
				
				$("#" + id + " .tblStamps").show();
				$("#" + id + " .tblClosing").hide();
				$("#" + id + " .tblEmail").hide();
				$("#" + id + " .tblLogs").hide();
				$("#" + id + " .tblCopyText").show();
				
				$("#" + id + " #taCopyText").val("");
				
				break;
			case "tdMenuTs":
				$("#" + id + " .tblSessionPorperties").hide();
				$("#" + id + " .tblContainerCustInfo").hide();
				$("#" + id + " .tblOpening").hide();
				$("#" + id + " .tblTs").show();
				
				$("#" + id + " .tblDispatchContainer").hide();
				
				// $(".tblDispatch").hide();
				// $(".tblPartsToReplace").hide();
				// $(".tblDispatchPOS").hide();
				// $(".tblDispatchNBD").hide();
				// $(".tblDispatchRTD").hide();
				// $(".tblVprsk").hide();
				// $(".tblL2Name").hide();
				// $(".tblHddConcent").hide();
				
				// $(".tblAddress").hide();
				// $(".tblDispatchNotes").hide();
				
				$("#" + id + " .tblStamps").show();
				$("#" + id + " .tblClosing").hide();
				$("#" + id + " .tblEmail").hide();
				$("#" + id + " .tblLogs").hide();
				$("#" + id + " .tblCopyText").show();
				
				$("#" + id + " #taCopyText").val("");
				
				break;
			case "tdMenuDispatch":
				$("#" + id + " .tblSessionPorperties").hide();
				$("#" + id + " .tblContainerCustInfo").hide();
				$("#" + id + " .tblOpening").hide();
				$("#" + id + " .tblTs").hide();
				
				$("#" + id + " .tblDispatchContainer").show();
				
				//$(".tblDispatch").show();
				//$(".tblPartsToReplace").hide();
				//$(".tblDispatchPOS").hide();
				//$(".tblDispatchNBD").hide();
				//$(".tblDispatchRTD").hide();
				//$(".tblVprsk").hide();
				//$(".tblL2Name").hide();
				//$(".tblHddConcent").hide();
				
				//$(".tblAddress").hide();
				//$(".tblDispatchNotes").hide();
				
				//$(".tblStamps").show();
				$("#" + id + " .tblClosing").hide();
				$("#" + id + " .tblEmail").hide();
				$("#" + id + " .tblLogs").hide();
				//$(".tblCopyText").show();
				
				var currentValueSelDispatchType = $("#" + id + " #selDispatchType").val();
				
				if(currentValueSelDispatchType == "ndps") {
					$("#" + id + " .tblStamps").hide();
					$("#" + id + " .tblCopyText").hide();
				}
				
				$("#" + id + " #taCopyText").val("");
				
				break;
			case "tdMenuClosing":
				$("#" + id + " .tblSessionPorperties").hide();
				$("#" + id + " .tblContainerCustInfo").hide();
				$("#" + id + " .tblOpening").hide();
				$("#" + id + " .tblTs").hide();
				
				$("#" + id + " .tblDispatchContainer").hide();
				
				//$(".tblDispatch").show();
				//$(".tblPartsToReplace").hide();
				//$(".tblDispatchPOS").hide();
				//$(".tblDispatchNBD").hide();
				//$(".tblDispatchRTD").hide();
				//$(".tblVprsk").hide();
				//$(".tblL2Name").hide();
				//$(".tblHddConcent").hide();
				
				//$(".tblAddress").hide();
				//$(".tblDispatchNotes").hide();
				
				$("#" + id + " .tblStamps").hide();
				$("#" + id + " .tblClosing").show();
				$("#" + id + " .tblEmail").hide();
				$("#" + id + " .tblLogs").hide();
				$("#" + id + " .tblCopyText").show();
				
				$("#" + id + " #taCopyText").val("");
				
				break;
			case "tdMenuEmail":
				$("#" + id + " .tblSessionPorperties").hide();
				$("#" + id + " .tblContainerCustInfo").hide();
				$("#" + id + " .tblOpening").hide();
				$("#" + id + " .tblTs").hide();
				
				$("#" + id + " .tblDispatchContainer").hide();
				
				//$(".tblDispatch").show();
				//$(".tblPartsToReplace").hide();
				//$(".tblDispatchPOS").hide();
				//$(".tblDispatchNBD").hide();
				//$(".tblDispatchRTD").hide();
				//$(".tblVprsk").hide();
				//$(".tblL2Name").hide();
				//$(".tblHddConcent").hide();
				
				//$(".tblAddress").hide();
				//$(".tblDispatchNotes").hide();
				
				$("#" + id + " .tblStamps").hide();
				$("#" + id + " .tblClosing").hide();
				$("#" + id + " .tblEmail").show();
				$("#" + id + " .tblLogs").hide();
				$("#" + id + " .tblCopyText").hide();
				
				$("#" + id + " #taCopyText").val("");
				
				break;
			case "tdMenuLogs":
				$("#" + id + " .tblSessionPorperties").hide();
				$("#" + id + " .tblContainerCustInfo").hide();
				$("#" + id + " .tblOpening").hide();
				$("#" + id + " .tblTs").hide();
				
				$("#" + id + " .tblDispatchContainer").hide();
				
				//$(".tblDispatch").show();
				//$(".tblPartsToReplace").hide();
				//$(".tblDispatchPOS").hide();
				//$(".tblDispatchNBD").hide();
				//$(".tblDispatchRTD").hide();
				//$(".tblVprsk").hide();
				//$(".tblL2Name").hide();
				//$(".tblHddConcent").hide();
				
				//$(".tblAddress").hide();
				//$(".tblDispatchNotes").hide();
				
				$("#" + id + " .tblStamps").hide();
				$("#" + id + " .tblClosing").hide();
				$("#" + id + " .tblEmail").hide();
				$("#" + id + " .tblLogs").show();
				$("#" + id + " .tblCopyText").hide();
				
				$("#" + id + " #taCopyText").val("");
				
				generateDeltaLogs(id);
				
				break;
			default:
				break;
		}
		
		
		
		
		
		
		//$("#nav-btn-home").hide();
		//$("#nav-btn-session").hide();
		//$("#nav-btn-opening").hide();
		//$("#nav-btn-ts").hide();
		//$("#nav-btn-dispatch").hide();
		//$("#nav-btn-closing").hide();
		//$("#nav-btn-gl").hide();
		//$("#nav-btn-delta").hide();
		
		//alert($(this).parent());
		
		//display:none;
		//mid-container-opening
		//mid-container-session
		
		//alert(attr);
		//$(this).addClass('active');
		//alert(this);
		//$(this).removeClass('myclass');
		//$(this).addClass('showhidenew');
		
		//var nodes = document.getElementById('#nav-container').childNodes;
		
		//for(var i=0; i<nodes.length; i++) {
			//if (nodes[i].nodeName.toLowerCase() == 'div') {
				 //nodes[i].removeClass('myclass');
			 //}
		//}
		
	});
	
	$( ".btnGenerateSessionData" ).click(function() {
		//alert( "Handler for .click() called." );
		
		var id = $(this).closest('.tblcl').attr('id');
		
		var text = $("#" + id + " .taSessionPorperties").val();
		
		var res = text.split("\n");
		
		//alert(res);
		
		var lineToOutput = text;
		
		//lineToOutput = lineToOutput.replace(':', ' : ');
		lineToOutput = lineToOutput.replace(/\:/g, ' : ');
		lineToOutput = lineToOutput.replace(/(^[ \t]*\n)/gm, "");
		//lineToOutput = lineToOutput.replace("/^[\s\t]*[\r\n]+|[\r\n]+\Z/m", "\n", lineToOutput);    // remove all blank (empty lines)
		//lineToOutput = lineToOutput.replace("/[\t]/", " ", lineToOutput); // convert tabs to spaces
		//lineToOutput = lineToOutput.replace("/[ ]{2,}/", " ", lineToOutput);  // convert multiple spaces to single spaces
		//lineToOutput = lineToOutput.replace("/[\n] /", "\n", lineToOutput);   // remove spaces at beginning of lines
		//lineToOutput = lineToOutput.replace("/ [\n]/", "\n", lineToOutput);   // remove spaces at end of lines
		
		lineToOutput = lineToOutput.replace("/^[\s\t]*[\r\n]+|[\r\n]+\Z/m", "\n");    // remove all blank (empty lines)
		lineToOutput = lineToOutput.replace("/[\t]/", " "); // convert tabs to spaces
		//lineToOutput = lineToOutput.replace("/[ ]{2,}/", " ");  // convert multiple spaces to single spaces
		lineToOutput = lineToOutput.replace("/[\n] /", "\n");   // remove spaces at beginning of lines
		lineToOutput = lineToOutput.replace("/ [\n]/", "\n");   // remove spaces at end of lines
		
		lineToOutput = lineToOutput.replace(/ +(?= )/g,''); // convert multiple spaces to single spaces
		
		lineToOutput = lineToOutput.replace(/  +/g, ' ');
		lineToOutput = lineToOutput.replace(/\n{2,}/g, '\n');
		lineToOutput = lineToOutput.replace(/(^[ \t]*\n)/gm, '');
		lineToOutput = lineToOutput.replace(/\s\s+/g, ' ');
		lineToOutput = lineToOutput.replace(/\t/g, ' ');
		//lineToOutput = lineToOutput.replace(':', ' : ');
		
		lineToOutput = lineToOutput.trim(); //Trim
		
		var lines = lineToOutput.split("\n");  
		//alert(lines.length);
		
		//$("#txtSessionID").val("Sam");
		//$("#txtFname").val("Sam");
		//$("#txtLname").val("Sam");
		
		//$('input[type="text"]').css({'background-color' : 'yellow'});
		
		for(var i = 0;i < lines.length;i++) {
			
			var data = lines[i].split(":");
			
			//alert("Data " + i + ". " + data[0] + " & " + data[1]);
			
			// switch(data[0]) {
				// case "SessionId":
					// $("#txtSessionID").val(data[1].trim());
					// alert("caught");
					// break;
				// case "Fname":
					// $("#txtFname").val(data[1].trim());
					// break;
				// default:
					// break;
			// }
			
			//alert("sam");
			
			if(data[0].trim() == "SessionId") {
				//document.getElementById('txtSessionID').value = data[1].trim();
				//alert("Data " + i + ". " + data[0] + " & " + data[1]);
				$("#" + id + " #txtSessionID").val(data[1].trim());
				//$("#txtSessionID").attr('value', data[1] );
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "Fname") {
				//document.getElementById('txtFname').value = data[1].trim();
				$("#" + id + " #txtFname").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "Lname") {
				//document.getElementById('txtLname').value = data[1].trim();
				$("#" + id + " #txtLname").val(data[1].trim());
			//	data = "";
			//alert(data[1].trim());
			}
			else if(data[0].trim() == "Company") {
				//document.getElementById('txtCompanyName').value = data[1].trim();
				$("#" + id + " #txtCompanyName").val(data[1].trim());
				//data = "";
				///alert(data[1].trim());
			}
			else if(data[0].trim() == "SrvTag") {
				//document.getElementById('txtSrvTag').value = data[1].trim();
				$("#" + id + " #txtSrvTag").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "Phone") {
				//document.getElementById('txtPhone').value = data[1].trim();
				$("#" + id + " #txtPhone").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "Email") {
				//document.getElementById('txtEmail').value = data[1].trim();
				$("#" + id + " #txtEmail").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "ExpCode") {
				//document.getElementById('txtExpCode').value = data[1].trim();
				$("#" + id + " #txtExpCode").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else {
				alert("Line number : " + i + "error");
			}	
			//lineToOutput = lineToOutput.replace(':', ' : ');
			//alert(lines[i]);
			//lineToOutput = lineToOutput.replace(':', ' : ');
		}
		
		//document.getElementById('txtSessionID').value = "12345";
		
		//lineToOutput = lineToOutput.replace('\t','');
		
		$("#" + id + " #taSessionPorperties").val(lineToOutput)
		//document.getElementById('textareaSessionData').value = lineToOutput;
		
		//document.getElementById('demo').value = lineToOutput;
	
		//var res = text1.split("\n");
	
	
		//for(var i = 0;i < res.length;i++){
		//code here using lines[i] which will give you each line
		//alert(i);
		//}
		//var str = "How are you doing today?";
		
	});
	
	
	
	$( ".btnClearSessionData" ).click(function() {
		var id = $(this).closest('.tblcl').attr('id');
		$("#" + id + " #taSessionPorperties").val("");
	});
	
	
	
	
	$('.selTsSteps').on('change', function (e) {
		
		var id = $(this).closest('.tblcl').attr('id');
		
		var valueSelected = this.value;
		
		if (valueSelected == "batterynotcharging") {
			$("#" + id + " divTroubleshootingStepsContainer").slideDown( "slow" );
		}
		else {
			$("#" + id + " divTroubleshootingStepsContainer").hide();
		}
		
	});
	
	
	
	
	$( ".btn-script" ).click(function() {
		//document.getElementById('textareaSessionData').value = "";
	});
	
	//END FUNCTION
	
	//.btn-script
	//.btn-primary
    //.btn-success
	
	
	
	
	
	
	
	
	
	function copyText(textId, id) {
		
		
		switch(textId) {
			case "OOS Script":
			//$("#txtSessionID").val(data[1].trim());
			// alert("caught");
				$("#" + id + " #taCopyText").val("No comment set for " + '"' + textId + '"' + ".");
			break;
			case "Confirm Tag/System":
				$("#" + id + " #taCopyText").val("No comment set for " + '"' + textId + '"' + ".");
			break;
			case "TOADE":
				$("#" + id + " #taCopyText").val("No comment set for " + '"' + textId + '"' + ".");
				$("#" + id + " #cbToade").prop( "checked", true );
			break;
		    default:
				$("#" + id + " #taCopyText").val("No comment set for " + '"' + textId + '"' + ".");
			break;
	    } //End Stitch
		
		
	} // End copyText function
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// BTN COLOR CHANGE FUNCTION
	
	$(".btn" ).click(function() {
		
		//$('input[type="text"]').css({'background-color' : 'yellow'});
		//var id = $(this).closest('td')
		//$('.btn').each(function(i, obj) {
			
		var id = $(this).closest('.tblcl').attr('id');
		
		$(this).closest('td').find('.btn').each(function(i, obj) {
			
			if ($(this).hasClass( "btnCurrent" )) {
				$(this).removeClass('btnCurrent');
				$(this).addClass('btnSuccess');
			}
		
		});
		
		$(this).addClass('btnCurrent');
		copyText($(this).text().trim(), id);
		//alert($(this).text());
		
		//document.getElementById('textareaSessionData').value = "";
	});
	
	//END FUNCTION
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//divContainerNoDaigRunReason
	//divContainerEpsaCodes
	
	$('.selDiagnosticRAN').on('change', function (e) {
		
		//var optionSelected = $("option:selected", this);
		//alert("change");
		
		var id = $(this).closest('.tblcl').attr('id');
		
		var valueSelected = this.value;
		if (valueSelected == "notrun") {
			//alert("change");
			$("#" + id + " .tblNoDiagTestRan").show();
			$("#" + id + " .tblEpsaDiagTest").hide();
			$("#" + id + " .tblOtherDiagTestRan").hide();
		}
		else if (valueSelected == "epsa") {
			//alert("change");
			$("#" + id + " .tblNoDiagTestRan").hide();
			$("#" + id + " .tblEpsaDiagTest").show();
			$("#" + id + " .tblOtherDiagTestRan").hide();
		}
		else {
			//alert("change");
			$("#" + id + " .tblNoDiagTestRan").hide();
			$("#" + id + " .tblEpsaDiagTest").hide();
			$("#" + id + " .tblOtherDiagTestRan").show();
		}

		
	});
	
	
	
	$('.selEpsaResult').on('change', function (e) {
		//var optionSelected = $("option:selected", this);
		//alert("change");
		
		var id = $(this).closest('.tblcl').attr('id');
		
		var valueSelected = this.value;
		if (valueSelected == "pass") {
			//alert("change");
			$("#" + id + " .tblEpsaErrorCodes").hide();
			
		}
		else {
			//alert("change");
			$("#" + id + " .tblEpsaErrorCodes").show();
		}

		
	});
	
	//
	//txtErrCode2000
	//txtErrCode
	//txtValidationCode
	//txtValidationDate
	
	//selDiagnosticResult
	//pass
	//fail
	
	$('.selDispatchType').on('change', function (e) {
		
		var id = $(this).closest('.tblcl').attr('id');
		
		var valueSelected = this.value;
		if (valueSelected == "ndps") {
			$("#" + id + " .tblPartsToReplace").hide();
			$("#" + id + " .tblDispatchTypeContainer").hide();
			$("#" + id + " .tblDispatchPOS").hide();
			$("#" + id + " .tblDispatchNBD").hide();
			$("#" + id + " .tblDispatchRTD").hide();
			
			$("#" + id + " .tblVprsk").hide();
			$("#" + id + " .tblL2Name").hide();
			$("#" + id + " .tblHddConcent").hide();
			$("#" + id + " .tblAddress").hide();
			$("#" + id + " .tblDispatchNotes").hide();
			
			$("#" + id + " .tblStamps").hide();
			$("#" + id + " .tblCopyText").hide();
			
		}
		else if (valueSelected == "pos") {
			$("#" + id + " .tblPartsToReplace").show();
			$("#" + id + " .tblDispatchTypeContainer").show();
			$("#" + id + " .tblDispatchPOS").show();
			$("#" + id + " .tblDispatchNBD").hide();
			$("#" + id + " .tblDispatchRTD").hide();
			
			$("#" + id + " .tblVprsk").show();
			$("#" + id + " .tblL2Name").show();
			$("#" + id + " .tblHddConcent").hide();
			$("#" + id + " .tblAddress").show();
			$("#" + id + " .tblDispatchNotes").show();
			
			$("#" + id + " .tblStamps").show();
			$("#" + id + " .tblCopyText").show();
			
		}
		else if (valueSelected == "nbd") {
			
			$("#" + id + " .tblPartsToReplace").show();
			$("#" + id + " .tblDispatchTypeContainer").show();
			$("#" + id + " .tblDispatchPOS").hide();
			$("#" + id + " .tblDispatchNBD").show();
			$("#" + id + " .tblDispatchRTD").hide();
			
			$("#" + id + " .tblVprsk").show();
			$("#" + id + " .tblL2Name").show();
			$("#" + id + " .tblHddConcent").hide();
			$("#" + id + " .tblAddress").show();
			$("#" + id + " .tblDispatchNotes").show();
			
			$("#" + id + " .tblStamps").show();
			$("#" + id + " .tblCopyText").show();
			
			
		}
		else if (valueSelected == "rtd") {
			
			$("#" + id + " .tblPartsToReplace").show();
			$("#" + id + " .tblDispatchTypeContainer").show();
			$("#" + id + " .tblDispatchPOS").hide();
			$("#" + id + " .tblDispatchNBD").hide();
			$("#" + id + " .tblDispatchRTD").show();
			
			$("#" + id + " .tblVprsk").show();
			$("#" + id + " .tblL2Name").show();
			$("#" + id + " .tblHddConcent").show();
			$("#" + id + " .tblAddress").show();
			$("#" + id + " .tblDispatchNotes").show();
			
			$("#" + id + " .tblStamps").show();
			$("#" + id + " .tblCopyText").show();
			
		}
		else if (valueSelected == "systemExchange") {
			$("#" + id + " #divContainerCommodity").hide();
			$("#" + id + " #divContainerVPRSK").show();
			$("#" + id + " #divContainerL2").show();
			$("#" + id + " #divContainerCopyText").show();
			$("#" + id + " #divContainerFlowPOS").hide();
			$("#" + id + " #divContainerFlowNBD").hide();
			$("#" + id + " #divContainerFlowRTD").hide();
			$("#" + id + " #divContainerFlowSystemExchange").show();
			$("#" + id + " #divContainerHddConcent").hide();
			
			$("#" + id + " #divContainerDispatchNumber").show();
			$("#" + id + " #spanContainerDispatchNumberBtn").show();
			
		}
		
	});
	
	
	
	$('.selEmailType').on('change', function (e) {
		
		var id = $(this).closest('.tblcl').attr('id');
		
		var valueSelected = this.value;
		var session1_fname = $("#" + id + " #txtFname").val();
		var casenum = $("#" + id + " #txtServiceRequest").val();
		var dpsnum = $("#" + id + " #txtDispatchNumber").val();
		var badgeID = $("#" + id + " #txtAgentBatchId").val();
		var AgentName = $("#" + id + " #txtAgentFName").val();
		var systype = $("#" + id + " #txtSysType").val();
		var svctag = $("#" + id + " #txtSrvTag").val();
		
		var customerEmail = $("#" + id + " #txtEmail").val();
		
		$("#" + id + " #txtToEmailId").val("");
		$("#" + id + " #txtEmailSubjectLine").val("");
		$("#" + id + " #taEamilContent").val("");
		
		$("#" + id + " #txtToEmailId").css("color", "black");
		$("#" + id + " #txtEmailSubjectLine").css("color", "black");
		$("#" + id + " #taEamilContent").css("color", "black");
		
		
		// if ($("#selDispatchType").val() != "ndps") {
			
			// if (dpsnum == "" || casenum == "" ) {
			
				// alert("Dispath or Service Request number not entered.");
				
				// $("#txtToEmailId").css("color", "red");
				// $("#txtEmailSubjectLine").css("color", "red");
				// $("#taEamilContent").css("color", "red");
				
				// $("#txtToEmailId").val("ERROR");
				// $("#txtEmailSubjectLine").val("ERROR");
				// $("#taEamilContent").val("ERROR");
			
			// }
			// else {
			
			
			switch(valueSelected) {
			case "ndps":
			//$("#txtSessionID").val(data[1].trim());
			// alert("caught");
			var email = "Dear " + session1_fname + ",\n\n\nThank you for contacting Dell Hardware Warranty Support.\n\n\nThis is in reference to your recent call to us with Service Request # " + casenum + " \n\n\nIf you need further assistance, simply reply to this e-mail. Please include the following information in the body of the email:\n\n\nYour preferred method of contact (email or phone if you would like us to call you back) \nPlease include your phone number and the best time of the day to call you if phone is your preferred method of contact \n\n\nResults of troubleshooting steps provided/error codes generated by diagnostics/BSOD error code (if any). \n\n\nPlease include your Service Request number so we can review your case history.\n\n\nThank you for being a valued Dell client.\n\n\n" + AgentName + "\nBadge# " + badgeID + "\nDell Hardware Support\n\n\nTo get support for your PC, including diagnostic tests, drivers, downloads, how-to articles, videos, FAQs and community forums through Dell’s support page at www.dell.com/support.";
			$("#txtToEmailId").val(customerEmail);
			$("#txtEmailSubjectLine").val("Dell Basic Warranty Support | Service Request #: " + casenum);
			$("#taEamilContent").val(email);
			break;
			
			case "pos":
			var email = "Dear " + session1_fname + ",\n\n\nIn an effort to increase your satisfaction with the support you have received, please take a moment to review the following information regarding your recent call with Service Request # " + casenum + " \n\n\nDispatch # " + dpsnum + "\n\n\nIn order to replace your part and in accordance with your service contract, we have set-up a \"Parts Only\" dispatch.\n\n\nYou may track the status of the dispatch online via this link:\nhttp://www.dell.com/support/incidents/us/en/04?c=us&s=bsd&cs=04&l=en\n\n\nIf you need further assistance with this request, simply reply to this e-mail. Please include the following information in the body of the email:\n\n\n1. Your preferred method of contact (email or phone if you would like us to call you back) \n\n2. Please include your phone number and the best time of the day to call you if phone is your preferred method of contact\n\n\nPlease include your Service Request number so we can review your case history.\n\n\nThank you for being a valued Dell client.\n\n\n" + AgentName + "\nBadge# " + badgeID + "\nDell Hardware Support\n\n\nTo get support for your PC, including diagnostic tests, drivers, downloads, how-to articles, videos, FAQs and community forums through Dell’s support page at www.dell.com/support.";
			$("#txtToEmailId").val(customerEmail);
			$("#txtEmailSubjectLine").val("Dell Basic Warranty Support | Service Request #: " + casenum);
			$("#taEamilContent").val(email);	
			break;
			
			case "nbd":
			var email = "Dear " + session1_fname + ",\n\n\nThis is " + AgentName + " from Dell Hardware Technical Support. \n\n\nI have arranged for an \"On-Site\" service for your Dell " + systype + " system with Service Tag# " + svctag + ". \n\n\nThe dispatch number is " + dpsnum + ". You may track the status of the dispatch via this link:\nhttp://www.dell.com/support/incidents/us/en/04?c=us&s=bsd&cs=04&l=en\n\n\nOur on-site technician will contact you to schedule appointment to replace the necessary part/s. Depending on parts availability, weather conditions, and shipping cut-offs at 5:00pm your local time, the parts will be delivered via Next Business Day courier. You will be receiving a call from our automated dialing system once our onsite technician receives the part(s). It is best if you leave your phone lines open or check your voice mail from time to time because the technicians will be calling you on their way to your address.\n\n\nYour Service Request number for this Service tag is " + casenum + ". If you are still encountering the same issue or have any further queries about this case, you can reach us by replying to this email. Please make sure to include the Service Request Number provided when making a follow-up. Thank you for choosing Dell. \n\n\nKind regards, \n" + AgentName + "\nDell Rep ID: " + badgeID + "\nDell Hardware Warranty Support\n\n\nTo get support for your PC, including diagnostic tests, drivers, downloads, how-to articles, videos, FAQs and community forums through Dell’s support page at www.dell.com/support.";
			$("#txtToEmailId").val(customerEmail);
			$("#txtEmailSubjectLine").val("Dell Basic Warranty Support | Service Request #: " + casenum);
			$("#taEamilContent").val(email);
			break;
			
			case "rtd":
			
			var email = "Dear " + session1_fname + ",\n\n\nIn an effort to increase your satisfaction with the support you have received, please take a moment to review the following information regarding your recent call with Service Request # " + casenum + " \n\n\nDispatch # " + dpsnum + "\n\n\nIn order to perform the necessary repairs to your system, we have made arrangements to have your system returned to the repair center. Per our conversation, I am sending a box for you to use to return the system to Dell. Once you receive the box, please pack the system and schedule a pickup from FedEx. \n\n\nOnce the system is received at Dell, our repair depot will diagnose, repair, and return your system to the address on record with Dell. This typically takes 7-10 business days, excluding any parts backlog. \n\n\nYou may track the status of the dispatch online via this link:\nhttps://depotstatustool.dell.com/depotstatustool/searchlaptop.aspx\n\n\nIf you need further assistance with this request, simply reply to this e-mail. Please include the following information in the body of the email:\n\n   1. Your preferred method of contact (email or phone if you would like us to call you back) \n   2. Please include your phone number and the best time of the day to call you if phone is your preferred method of contact \n\n\nPlease include your Service Request number so we can review your case history.\n\n\nThank you for being a valued Dell client.\n\n\n" + AgentName + "\nBadge# " + badgeID + "\nDell Hardware Support\n\n\nTo get support for your PC, including diagnostic tests, drivers, downloads, how-to articles, videos, FAQs and community forums through Dell’s support page at www.dell.com/support.";
			$("#txtToEmailId").val(customerEmail);
			$("#txtEmailSubjectLine").val("Dell Basic Warranty Support | Service Request #: " + casenum);
			$("#taEamilContent").val(email);
			break;
			
		    default:
				$("#" + id + " #txtToEmailId").val("NO_EMAIL ID");
				$("#" + id + " #txtEmailSubjectLine").val("NO_EMAIL_SUBJECT");
				$("#" + id + " #taEamilContent").val("CONTENT WILL BE UPDATED SOON.");
			break;
			} //End Stitch
			
			
			// }
			
			
		// }
		// else {
			
				// if (casenum == "" ) {
			
				// alert("Service Request number not entered.");
				
				// $("#txtToEmailId").css("color", "red");
				// $("#txtEmailSubjectLine").css("color", "red");
				// $("#taEamilContent").css("color", "red");
				
				// $("#txtToEmailId").val("ERROR");
				// $("#txtEmailSubjectLine").val("ERROR");
				// $("#taEamilContent").val("ERROR");
			
				// }
				// else {
				
				
					// if ($("#selDispatchType").val() == "ndps") {
						// var email = "Dear " + session1_fname + ",\n\n\nThank you for contacting Dell Hardware Warranty Support.\n\n\nThis is in reference to your recent call to us with Service Request # " + casenum + " \n\n\nIf you need further assistance, simply reply to this e-mail. Please include the following information in the body of the email:\n\n\nYour preferred method of contact (email or phone if you would like us to call you back) \nPlease include your phone number and the best time of the day to call you if phone is your preferred method of contact \n\n\nResults of troubleshooting steps provided/error codes generated by diagnostics/BSOD error code (if any). \n\n\nPlease include your Service Request number so we can review your case history.\n\n\nThank you for being a valued Dell client.\n\n\n" + AgentName + "\nBadge# " + badgeID + "\nDell Hardware Support\n\n\nTo get support for your PC, including diagnostic tests, drivers, downloads, how-to articles, videos, FAQs and community forums through Dell’s support page at www.dell.com/support.";
						// $("#taEamilContent").val(email);
					// }
					// else {
						// alert("Change the Dispatch Type.");
					// }
					
				// }
		// } //End If
		
			
		
	});
	
	
	
	function generateDeltaLogs(id) {
		
		//var id = $(this).closest('.tblcl').attr('id');
		
		if ($("#" + id + " #txtOracleID").val() == "") {
			//var oracleid = prompt("Please enter your name oracle id.");
			//$("#" + id + " #txtOracleID").val(oracleid);
		}
		
		var deltaLogs = '';
		
		deltaLogs = '- Name: ' + $("#" + id + " #txtFname").val();
		deltaLogs += '\n- Service Tag: ' + $("#" + id + " #txtSrvTag").val();
		deltaLogs += '\n- System Type: ' + $("#" + id + " #txtSysType").val();
		deltaLogs += '\n- Session ID: ' + $("#" + id + " #txtSessionID").val();
		
		///VPKRS///
		//if (session1_plasticCheck == '1')
		//session1_deltaLog += '\n- VPKRS: **No need for plastic replacement';
		//else if (session1_plasticCheck == '2')
		//session1_deltaLog += '\n- VPKRS: **Need to replace: ' + session1_plasticToReplace;
		
		
		deltaLogs += '\n\n» STAMPS: '; 
		
		if ($("#" + id + " #cbVa").prop('checked')==true){ 
        //do something
		deltaLogs += 'VA';
		}
		else {
			deltaLogs += 'VA NOT DONE';
		}
		
		if ($("#" + id + " #cbVdi").prop('checked')==true){ 
        //do something
		deltaLogs += '; VDI';
		}
		
		if ($("#" + id + " #cbToade").prop('checked')==true){ 
        //do something
		deltaLogs += '; TOADE';
		}
		
		if ($("#" + id + " #cbTat").prop('checked')==true){ 
        //do something
		deltaLogs += '; TAT';
		}
		
		if ($("#" + id + " #cbTarp").prop('checked')==true){ 
        //do something
		deltaLogs += '; TARP';
		}
		
		if ($("#" + id + " #cbDl").prop('checked')==true){ 
        //do something
		deltaLogs += '; DATA LOSS';
		}
		
		
		if ($("#" + id + " #cbPosd").prop('checked')==true){ 
        //do something
		deltaLogs += '; POS DISCLAMER';
		}
		
		if ($("#" + id + " #cbCidar").prop('checked')==true){ 
        //do something
		deltaLogs += '; CIDAR';
		}
		
		if ($("#" + id + " #cbGavesr").prop('checked')==true){ 
        //do something
		deltaLogs += '; GAVE SR';
		}
		
		if ($("#" + id + " #cbSummarysent").prop('checked')==true){ 
        //do something
		deltaLogs += '; SUMMARY EMAIL SENT';
		}
		
		
		deltaLogs += '\n\n\n\n» CUSTOMER STATED ISSUE: \n' + $("#" + id + " #taCustomerConcern").val();
		
		deltaLogs += '\n\n» TECH LOG: \n' + $("#" + id + " #taTroubleshootingLogs").val();
		
		deltaLogs += '\n\n» NEXT STEP: \n' + $("#" + id + " #taNextAction").val();
		
		deltaLogs += '\n\n» ORACLE ID: \n- ' + $("#" + id + " #txtOracleID").val();
		
		
		// if (session1_diagsRun == ''){
			// alert("Please select the diagnostic test you used.");
			// headerTabClick(currentSession, 'TS');
			// return;
		// }
		
		deltaLogs += '\n\n» DIAGNOSTIC:';
		
		if($('.selDiagnosticRAN').val() == "notran") {
			deltaLogs += '\n- NOT RUN REASON: ' + $("#" + id + " #taNoDiagRunReason").val();
		}
		else if($('.selDiagnosticRAN').val() == "other") {
			deltaLogs += '\n- ' + $("#" + id + " #taOtherDiagRun").val();
		}
		else {
			deltaLogs += '\n- EPSA: ';
			if($("#" + id + " #selEpsaResult").val() == "pass") {
				deltaLogs += "Passed";
			}
			else {
				deltaLogs += "Failed" + "\n- Error Code : 2000 " + $("#" + id + " #txtErrCode").val();
				
				deltaLogs += "\n- Validation Code : 2000 " + $("#" + id + " #txtValidationCode").val();
				deltaLogs += "\n- Validity : 2000 " + $("#" + id + " #txtValidationDate").val();
			}
		}
		
		deltaLogs += '\n- Part to replace: ' + $("#" + id + " #txtPartToReplace").val();
		
		
		
		if($("#" + id + " #selDispatchType").val() == "ndps") {
			deltaLogs += '\n\n** THIS IS A NON-DISPATCH CALL **';
			
		}
		else {
			deltaLogs += '\n L2 ' +  $("#" + id + " #selL2Name").val() + ' APPROVED DPS for ' + $("#" + id + " #txtPartToReplace").val();
		}
		
		
		
		// TO DO VPRSD PARTS
		//session1_deltaLog += '\n- Additional Parts (VPKRS): ' + session1_plasticToReplace;
		
		
		if($("#" + id + " #cbDl").prop('checked')==true) {
			deltaLogs += '\n- EDUCATE CX ABOUT HDD DATA LOSS';
		}
		
		if($("#" + id + " #cbPosd").prop('checked')==true) {
			deltaLogs += '\n- FRU TO CRU, CX AGREE WITH POS DISCLAIMER';
		}
		
		
		
		
	  // if (session1_HDDConsent != ''){
		// if(session1_HDDConsent=='Accept')
		  // session1_deltaLog += '\n- Additional note to depot: CUSTOMER IS OKAY WITH HDD RE-IMAGE/REPLACEMENT AND AWARE OF DATA LOSS.';
		// else
		  // session1_deltaLog += '\n- Additional note to depot: ** DO NOT REPLACE / RE-IMAGE THE HARD DRIVE **';
	  // }

	  // if (session1_MediaCheck != ''){
		// if(session1_MediaCheck == '')
		  // session1_deltaLog += '';
		// else if(session1_MediaCheck == 'N/A')
		  // session1_deltaLog += '\n- Media Check: Not applicable for this dispatch';
		// else if(session1_MediaCheck =='YES')
		  // session1_deltaLog += '\n- Media Check: Will send media';
		// else if(session1_MediaCheck =='NO')
		  // session1_deltaLog += '\n- Media Check: Offered media, customer declined';
		// else if(session1_MediaCheck == 'YES-M')
		  // session1_deltaLog += '\n- Media Check: This is a Media ONLY DPS';
	  // }
		
		
		deltaLogs += '\n- Service Request #: '  + $("#" + id + " #txtServiceRequest").val();
		deltaLogs += '\n- Dispatch #: '  + $("#" + id + " #txtDispatchNumber").val();
		
		deltaLogs += '\n- BTTR: ' + $("#" + id + " #txtBttr").val();
		
		deltaLogs += '\n\n- Gave Service Request Number, email: ' +  + $("#" + id + " #txtSupportEmailId").val();;
		deltaLogs += '\n- Email Address and Phone Number Obtained and Updated in SR';
		
		deltaLogs += '\n- Heat Check : '  + $("#" + id + " #selHeatCheck").val();
		deltaLogs += '\n- Self Rating : '  + $("#" + id + " #selSelfRating").val();
		
		deltaLogs += '\n- Sent Summary Email';
		
		
		
		
		
		 
		 $("#" + id + " #taDl").val(deltaLogs);
		 
		 
		 
		 

		 
		
		
		
	}
	
	
	
	
});

