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
	
	$(".tblAllPageSpiels").hide();
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
				$("#" + id + " .tblAllPageSpiels").hide();
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
				$("#" + id + " .tblAllPageSpiels").show();
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
				
				$("#" + id + " .tblStamps").hide();
				$("#" + id + " .tblClosing").hide();
				$("#" + id + " .tblEmail").hide();
				$("#" + id + " .tblLogs").hide();
				$("#" + id + " .tblCopyText").show();
				
				$("#" + id + " #taCopyText").val("");
				
				break;
			case "tdMenuTs":
				$("#" + id + " .tblSessionPorperties").hide();
				$("#" + id + " .tblAllPageSpiels").hide();
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
				
				$("#" + id + " .tblStamps").hide();
				$("#" + id + " .tblClosing").hide();
				$("#" + id + " .tblEmail").hide();
				$("#" + id + " .tblLogs").hide();
				$("#" + id + " .tblCopyText").show();
				
				$("#" + id + " #taCopyText").val("");
				
				break;
			case "tdMenuDispatch":
				$("#" + id + " .tblSessionPorperties").hide();
				$("#" + id + " .tblAllPageSpiels").hide();
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
				
				var currentValueSelDispatchType = $("#" + id + " .selDispatchType").val();
				
				if(currentValueSelDispatchType == "ndps") {
					$("#" + id + " .tblStamps").hide();
					$("#" + id + " .tblCopyText").hide();
				}
				else {
					$("#" + id + " .tblStamps").show();
					$("#" + id + " .tblCopyText").show();
				}
				
				$("#" + id + " #taCopyText").val("");
				
				break;
			case "tdMenuClosing":
				$("#" + id + " .tblSessionPorperties").hide();
				$("#" + id + " .tblAllPageSpiels").hide();
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
				$("#" + id + " .tblAllPageSpiels").hide();
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
				$("#" + id + " .tblAllPageSpiels").hide();
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
		
		
		
		
		//str.replace(/[^a-z0-9-.@:\s\n_]/gi, '');
		
		// a-z0-9-.@:\s\n_
		
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
		//lineToOutput = lineToOutput[i].replace(/[^a-z0-9-.@:\s\n_]/gi, '');
		lineToOutput = lineToOutput.replace(/[^a-z0-9-.@:\s\n_]/gi, '');
		lineToOutput = lineToOutput.trim(); //Trim
		
		var lines = lineToOutput.split("\n");  
		//alert(lines.length);
		
		
		for(var i = 0;i < lines.length;i++) {
			//alert(lines[i].replace(/[^a-z0-9-.@:\s\n_]/gi, ''));  // remove unwanted chatacters
			//.replace(/[^a-z0-9-.@:\s\n_]/gi, '')
		}
		
	
		//$("#txtSessionID").val("Sam");
		//$("#txtFname").val("Sam");
		//$("#txtLname").val("Sam");
		
		//$('input[type="text"]').css({'background-color' : 'yellow'});
		
		for(var i = 0;i < lines.length;i++) {
			
			//lineToOutput[i].replace(/[^a-z0-9-.@:\s\n_]/gi, '');
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
			
			
	
	 
	  
 
// 

// 

//BTTR

 
			
			
			
			if(data[0].trim() == "Information on Session Number") {
				//document.getElementById('txtSessionID').value = data[1].trim();
				//alert("Data " + i + ". " + data[0] + " & " + data[1]);
				$("#" + id + " .txtSessionID").val(data[1].trim());
				//$("#txtSessionID").attr('value', data[1] );
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "SERVICE_TAG" && data[1].trim() != "") {
				//document.getElementById('txtFname').value = data[1].trim();
				$("#" + id + " .txtSrvTag").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "Service_Tag" && data[1].trim() != "") {
				//document.getElementById('txtFname').value = data[1].trim();
				$("#" + id + " .txtSrvTag").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "CHATTRANSCRIPT_EMAIL"  && data[1].trim() != "") {
				//document.getElementById('txtLname').value = data[1].trim();
				$("#" + id + " .txtEmail").val(data[1].trim());
			//	data = "";
			//alert(data[1].trim());
			}
			else if(data[0].trim() == "EMAIL"  && data[1].trim() != "") {
				//document.getElementById('txtLname').value = data[1].trim();
				$("#" + id + " .txtEmail").val(data[1].trim());
			//	data = "";
			//alert(data[1].trim());
			}
			
			else if(data[0].trim() == "CompanyName") {
				//document.getElementById('txtCompanyName').value = data[1].trim();
				$("#" + id + " .txtCompanyName").val(data[1].trim());
				//data = "";
				///alert(data[1].trim());
			}
			else if(data[0].trim() == "LastName") {
				//document.getElementById('txtSrvTag').value = data[1].trim();
				$("#" + id + " .txtLname").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "LOGIN_NAME") {
				//document.getElementById('txtPhone').value = data[1].trim();
				$("#" + id + " .txtFname").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "Phonenum") {
				//document.getElementById('txtEmail').value = data[1].trim();
				$("#" + id + " .txtPhone").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "SUBJECT") {
				//document.getElementById('txtExpCode').value = data[1].trim();
				$("#" + id + " .taCustomerConcern").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "advancedTS") {
				//document.getElementById('txtExpCode').value = data[1].trim();
				$("#" + id + " .taTroubleshootingLogs").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "advancedTs") {
				//document.getElementById('txtExpCode').value = data[1].trim();
				$("#" + id + " .taTroubleshootingLogs").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			else if(data[0].trim() == "advancedts") {
				//document.getElementById('txtExpCode').value = data[1].trim();
				$("#" + id + " .taTroubleshootingLogs").val(data[1].trim());
				//data = "";
				//alert(data[1].trim());
			}
			
			else {
				//alert("Line number : " + i + "error");
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
			case "Hello":
			
				alert($('#' + id + ' .selIsChatTransfered').val());
				//alert(id);
				
				//alert($(".selIsChatTransfered").val());
				//#" + id + " 
				
				if ($("#" + id + " #selIsChatTransfered").val() == "Yes") {
					
					$("#" + id + " #taCopyText").val("Hello " + $("#" + id + " .txtFname").val() + ". Your chat has been transferred to Dell Basic Warranty Support. My name is " + $("#" + id + " #txtAgentFName").val() + ".");

				}
				else {
					
					$("#" + id + " #taCopyText").val("Hello " + $("#" + id + " .txtFname").val() + ". Thank you for contacting Dell Basic Warranty Support. My name is " + $("#" + id + " #txtAgentFName").val() + ".");
					
				}
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "Repeat Caller":
				$("#" + id + " #taCopyText").val("Thank you for the info. Please allow me 2-3 minutes to review your recent case notes & avoid any duplication.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "Repeat Caller Apologise":
				$("#" + id + " #taCopyText").val("I've reviewed your previous case logs and I understand your concern. I apologize for any inconvenience & time taken to address this issue.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			
			case "Confirm Issue ?":
				var issue = prompt("Please enter your name");
				$("#" + id + " #taCopyText").val("As I understand, the issue with your system is about " + issue + ". Is that correct?");
				
				var issueTemp = issue
				issueTemp = issueTemp + "\n" + $("#" + id + " .taCustomerConcern").val();
				$("#" + id + " .taCustomerConcern").val(issueTemp);
				
				$("#" + id + " .hfIssueInShort").val(issue);
				
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			case "Empathy":
				$("#" + id + " #taCopyText").val("I apologize for any inconvenience this issue may have caused to you.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			case "Assurance":
				$("#" + id + " #taCopyText").val("Let's work together to ensure a quickest & best possible resolution to your issue.");
			break;
			case "Tag?":
				$("#" + id + " #taCopyText").val("Can you confirm that the System you need support with is " + $("#" + id + " .txtSysType").val() + " with Service Tag : " + $("#" + id + " .txtSrvTag").val() + "?");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "In Warranty":
				$("#" + id + " #taCopyText").val("Thank you for your confirmation. Just to let you know, your System still has an active Hardware Warranty valid till " + $("#" + id + " .txtExpDate").val() + ".");
				
				$("#" + id + " .cbToade").prop('checked', true);

				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				//pp
			break;
			case "Out Warranty":
				$("#" + id + " #taCopyText").val("Thank you for your confirmation. I'd like to inform you that your System's Hardware Warranty expired on " + $("#" + id + " .txtExpDate").val() + ".");
				
				$("#" + id + " .cbToade").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			case "Confirm Contact":
				$("#" + id + " #taCopyText").val("I'd like to confirm that if in case we get disconnected from this chat, can I reach you on "+ $("#" + id + " .txtPhone").val() +" or email you at "+ $("#" + id + " .txtEmail").val() +"? Also let me know if you have any alternate contact number.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			case "I Will Call Back":
				$("#" + id + " #taCopyText").val("Perfect. If in case we get disconnected, keep your phone line free & please allow me 2-3 minutes to call you back.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			
			case "VA":
				$("#" + id + " #taCopyText").val("Could you please provide the name of the person who purchased this computer or the Company name wherein this computer is registered to?");
				
				$("#" + id + " .cbVa").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			case "At System":
				$("#" + id + " #taCopyText").val("One last thing, are you near the System in question so that we can work on it? Are you chatting from the same System?");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "Permit":
				$("#" + id + " #taCopyText").val("In order to identify & isolate the issue accurately, I'd like to ask you a few questions about your system. Hope that’s alright with you.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "First":
				$("#" + id + " #taCopyText").val("For starters, since how long have you been experiencing this issue? Were there any HW/SW changes made to the system recently?");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "Is Ts Done":
				$("#" + id + " #taCopyText").val("Could you tell me if you've performed any additional steps on your own? So that we may skip those & save some time & trouble on this chat.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "Ts TY":
				$("#" + id + " #taCopyText").val("Steps you've carried out should help us reach a conclusion quickly. I truly appreciate your efforts & commitment to get this issue resolved.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "Ran Diags?":
				$("#" + id + " #taCopyText").val("By any chance, have you ran any Diagnostics tests on your system? Do you have with any error-code from the tests you ran earlier?");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "Probe-Conclude":
				$("#" + id + " #taCopyText").val("Thanks for all the info. Let's work together to carry-out a few steps to pin-point the issue. We should be done in about 5-10 minutes.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "ePSA":
				$("#" + id + " #taCopyText").val("Power off your system. Tap the F12 key at the Dell splash screen on start-up. Choose Diagnostics from the menu. Note down the error that the ePSA test shows");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "LCD BIST":
				$("#" + id + " #taCopyText").val("While the computer is turned off, press and hold the <D> key while pressing the <Power> button. This will start the LCD BIST. There will be multiple changing color screens, but no beeps will be present. Look for distortion, lines, or whatever LCD issues you have been experiencing in the operating system (Windows). Once the test is complete, the system will restart.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "FPD BIST":
				$("#" + id + " #taCopyText").val("Disconnect all signal cables and then power on the monitor. Press button 1 and button 4 simultaneously for 2 seconds. Press button 4 to change the background color from gray, red, green, blue, and white. Kindly observe if the issue still exists on any of the colored screens.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "PSU BIST":
				$("#" + id + " #taCopyText").val("All power supply units include a self-test ability in an isolation mode. A test button and LED are on the side of the unit where the AC plug is located. Ensure the power cable is connected to the supply & Press the test button to test the PSU.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "Hard Reset":
				$("#" + id + " #taCopyText").val("Disconnect all the external devices and peripherals connected to you system. Disconnect the power cord. Press and hold the system power button for 15 seconds to clear the flew power. Connect the power cord and press the power button on the system to check if the system is booting now.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "DC- 1":
				$("#" + id + " #taCopyText").val("For the next steps, I'd like to establish DellConnect, that would allow me to access your system & assist you remotely. Let me guide you through the steps for initiating DellConnect.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "DC- 2":
				$("#" + id + " #taCopyText").val("I'd also like to inform you that during the remote assistance session, I'd not access any of your personal files & you can disable or end the session anytime you wish.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "DC- 3":
				$("#" + id + " #taCopyText").val("Please click this link  {LINK} for us to get connected. Click Download Now button if you see one. Please grant permission by clicking on on-screen prompts with OK, YES or RUN.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "DC- 4":
				$("#" + id + " #taCopyText").val("Once our session begins, you will always have overriding control by movement of your mouse. You will also be able to discontinue the session at any time by clicking 'X' in the lower right hand corner of the desktop.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "DC- 5":
				$("#" + id + " #taCopyText").val("Great. We're connected now. While I'm working on the issue, I recommend you be in-front of the system. Let's continue to use this window for our conversation.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "Parts Only Dispatch":
				$("#" + id + " #taCopyText").val("Basis the symptoms, it appears that the issue is caused by a faulty "+ $("#" + id + " .txtPartToReplace").val() +". I'm going to setup a Parts-Only dispatch. Would you be comfortable installing the part yourself?");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "Why POS":
				$("#" + id + " #taCopyText").val("Considering the ease of installation & replacement, certain parts on your system are classified as Customer-Replaceable-Unit. This is to ascertain time-efficient solution for you. For the more complex repairs, we will assign a Service Engineer as per your Warranty Entitlement.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			
			case "POS Manual":
				$("#" + id + " #taCopyText").val("You can refer to online Manual for your System here - http://www.dell.com/support/home/in/en/indhs1/Products?app=manuals");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			
			case "Why Refurb":
				$("#" + id + " #taCopyText").val("Replacement part/s sent will be tagged as refurbished since the factory-seal has been opened and tested for quality. It doesn't necessarily mean that the part is used. Also replacement parts too are covered by System Warranty.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			
			case "HDD Data Loss":
				$("#" + id + " #taCopyText").val("Since we will be replacing your Hard Drive, I want to inform you that Dell is not liable for recovering the data that was stored on your Hard Drive. All data will be considered lost once the hard drive is replaced. You may avail of 3rd party data recovering services at your complete discretion.");
				$("#" + id + " .cbHddDl").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "CIDAR":
				$("#" + id + " #taCopyText").val("Please confirm that there is No Physical-Damage to the System. Physical damage outside of a Complete Care/Accidental Damage contract (usually caused by drop, fall or liquid spills) is not covered under the System’s Limited Hardware Warranty. If physical damage is discovered on the system, there may be an additional cost incurred by the end user in order to complete the service.");
				$("#" + id + " .cbCidar").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			
			case "TAT":
				$("#" + id + " #taCopyText").val("Depending on Parts availability, weather conditions and shipping cut-off, you will receive the replacement part/s via Next Business Day carrier service.");
				$("#" + id + " .cbTat").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			
			case "TARP":
				$("#" + id + " #taCopyText").val("Inside the box you will find instructions advising you as to whether or not the part needs to be returned. If the part is a returnable item, a pre-paid return waybill label will be included. Please use the box in which the replacement part arrived to return the original part, then contact the carrier to schedule a pick-up. Please make sure to return the faulty part/s within 10 days.");
				$("#" + id + " .cbTarp").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "VDI":
				$("#" + id + " #taCopyText").val("Can you please provide Name and Phone Number (preferably of the person who will receive the Parts) & Complete Address including Zip-Code where Replacement parts need to be dispatched?");
				$("#" + id + " .cbVdi").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
		    //NBD
			
			
			case "Dispatch NBD":
				$("#" + id + " #taCopyText").val("Based on the symptoms & results of troubleshooting indicates that the "+ $("#" + id + " .txtPartToReplace").val() +" needs to be replaced. I'm going to setup for an On-Site service. I'll arrange for a Dell Certified Technician visit with the Replacement parts to make sure that all parts are installed & checked properly. In case the problem persists, the Onsite Technician will take necessary actions. Should I go ahead and set that up for you?");
				//$("#" + id + " .cbVdi").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;

			
			case "NBD TAT":
				$("#" + id + " #taCopyText").val("Dell Onsite Tech will contact you to schedule appointment to replace the necessary part/s. Depending on Parts availability, weather conditions and shipping cut-off, Technician will receive the replacement part/s via Next Business Day carrier service. You'll receive a call from our automated dialing system once Onsite Tech receives the part/s. If technician fails to reach you, they could either just go at the service address or will re-schedule your service. ");
				$("#" + id + " .cbTat").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "VKPRS":
				$("#" + id + " #taCopyText").val("Can you also please check the system for any missing keyboard keys, plastic parts, screws, rubber bumpers or rubber feet? While these things would be insignificant, we could get them fixed along with the Onsite service.");
				$("#" + id + " .cbVkprs").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "POS DISCLAMER":
				$("#" + id + " #taCopyText").val("We understand that you requested a Part/s Only service to a part we classified as Field Replaceable Unit (FRU). Please be informed that Dell will not be liable for any damages that may occur during the installation of the part. Do you agree with this?");
				$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			 
			
									
			case "DEPOT":
				$("#" + id + " #taCopyText").val("Based on the symptoms & troubleshooting results, it is evident that components internal to your system need to be replaced. Since your system has Return-to-Depot warranty, it needs to be sent to our Repair Center and the turn-around-time for the repair process would be 10-12 Business days. Let me set it up for you, Okay?");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "EXP-DEPOT":
				$("#" + id + " #taCopyText").val("As per System's warranty, you have Next Business Day service but as we diagnose the complexity of the issue on your system, another option we can consider is to send the system to Dell Repair Center. Normally, this takes 7-10 Business days but I'd request for an Express-Depot Repair, this will only take only 3-5 Business days. ");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "DEPOT OSRI":
				$("#" + id + " #taCopyText").val("Just to set your expectations, the Repair may require for the Hard-Drive to be reimaged or for the Operating System to be reinstalled. If you do Not wish to have the Hard-Drive reimaged, you can put a note on the Repair form or you can remove the Hard-Drive before sending the system in. Otherwise, please be informed that Dell is not liable for the data loss during the process of repair.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;

			case "BOX TAT":
				$("#" + id + " #taCopyText").val("You will receive Empty-Box with packing material & a return prepaid waybill within 2-3 Business days. Please ship the System back to us at the earliest to enable quick service of your product.");
				$("#" + id + " .cbTat").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "CHECKLIST":
				$("#" + id + " #taCopyText").val("Do verify the following before shipping the Box 1. Defective unit is included, 2.  Battery is included, 3. Dell AC Adapter (Charger) is included 4. Back up any personal data (If Applicable) 5. Remove any SD/Memory Cards in the unit 6. Remove any external peripherals.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			// CLOSING
			
			
			case "DELIGHT 1":
				$("#" + id + " #taCopyText").val( $("#" + id + " .txtFname").val() +", it was a pleasure assisting you. Thank you for your support & partnership to get this issue sorted out.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "DELIGHT 2":
				$("#" + id + " #taCopyText").val("I appreciate your commitment to resolve this issue & patience with me. You made my job a lot easier. " + $("#" + id + " .txtFname").val() + ", Thank you so much.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "DELIGHT 3":
				$("#" + id + " #taCopyText").val("Lastly, I'd like to thank you for all your efforts today. While all I did was Chat, you truly did all the hard-work. " + $("#" + id + " .txtFname").val() + ", Thanks a ton.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "DELIGHT - ISSUE NOT RESOLVED":
				$("#" + id + " #taCopyText").val("Unfortunately we couldn't fix the issue but that sure does not take away credit for all your efforts & patience with me today. Thanks " + $("#" + id + " .txtFname").val() + ".");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "HEAT CHECK":
				$("#" + id + " #taCopyText").val( $("#" + id + " .txtFname").val() + ", how was your Overall experience with Dell? Is there anything that we could have done better to improve our services?");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "FEEDBACK TY":
				$("#" + id + " #taCopyText").val( $("#" + id + " .txtFname").val() + ", we at Dell have a long history of listening to and engaging with our customers, so feedback from our you is very important to us.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "RAVE":
				$("#" + id + " #taCopyText").val( $("#" + id + " .txtFname").val() + ", earning and keeping your trust is at the center of everything we do at Dell. Thanks for your continued support.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "RED FLAG":
				$("#" + id + " #taCopyText").val( $("#" + id + " .txtFname").val() + ", considering your support experience with Dell, my Supervisor wants to call you & get a quick feedback. Are you available to talk now?");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "Follow-up":
				$("#" + id + " #taCopyText").val("Please be assured that I will follow up on this case until it is completely resolved.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "SR No.":
				$("#" + id + " #taCopyText").val("For reference, your Service Request # is " + $("#" + id + " .txtServiceRequest").val() + ". You will also be receiving a transcript of our chat conversation via Email.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			
			
			
			
			case "DSP No.":
				$("#" + id + " #taCopyText").val("Dispatch # is " + $("#" + id + " .txtDispatchNumber").val() + ". We'd track your Dispatch & email you timely status notifications till closure.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "WILL EMAIL":
				$("#" + id + " #taCopyText").val("I'm going to send you Summary email at the end. It'll contain Service Request # & other vital info pertaining to today's Chat conversation.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "REPLY EMAIL":
				$("#" + id + " #taCopyText").val("Please reply back to that Email & my team would contact you. That way we can pick-up where we left-off & save you a lot of time & trouble.");
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
				//$("#" + id + " .cbPosd").prop('checked', true);
			break;
			
			case "Anything Else?":
				$("#" + id + " #taCopyText").val("Hope I have addressed all your concerns regarding the system. Is there anything else I can assist you with today?");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "EDUCATE":
				$("#" + id + " #taCopyText").val("You can always get support for your PC, including diagnostic tests, driver downloads, how-to articles, videos, FAQs on www.Dell.com/Support.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
			break;
			
			case "CLOSE":
				$("#" + id + " #taCopyText").val("Thank you for choosing Dell. Wish you a wonderful day ahead.");
				//$("#" + id + " .cbPosd").prop('checked', true);
				
				$("#" + id + " #taCopyText").select();
				document.execCommand('copy');
				
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
			
			
			$("#" + id + " #taDispatchNotes").val("");
			
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
			
			$("#" + id + " #taDispatchNotes").val("");
			
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
			
			$("#" + id + " #taDispatchNotes").val("Replace Parts a necessasry");
			
			
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
			
			
			$("#" + id + " #taDispatchNotes").val("Replace Parts a necessasry");
			
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
			
			$("#" + id + " #taDispatchNotes").val("Replace Parts a necessasry");
			
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
		
		deltaLogs = '- Name: ' + $("#" + id + " .txtFname").val();
		deltaLogs += '\n- Service Tag: ' + $("#" + id + " .txtSrvTag").val();
		deltaLogs += '\n- System Type: ' + $("#" + id + " .txtSysType").val();
		deltaLogs += '\n- Session ID: ' + $("#" + id + " .txtSessionID").val();
		
		///VPKRS///
		//if (session1_plasticCheck == '1')
		//session1_deltaLog += '\n- VPKRS: **No need for plastic replacement';
		//else if (session1_plasticCheck == '2')
		//session1_deltaLog += '\n- VPKRS: **Need to replace: ' + session1_plasticToReplace;
		
		
		deltaLogs += '\n\nSTAMPS: '; 
		
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
		
		
		deltaLogs += '\n\n\n\nCUSTOMER STATED ISSUE: \n' + $("#" + id + " .taCustomerConcern").val();
		
		deltaLogs += '\n\nTECH LOG: \n' + $("#" + id + " .taTroubleshootingLogs").val();
		
		deltaLogs += '\n\nNEXT STEP: \n' + $("#" + id + " .taNextAction").val();
		
		deltaLogs += '\n\nORACLE ID: \n- ' + $("#" + id + " .txtOracleID").val();
		
		
		// if (session1_diagsRun == ''){
			// alert("Please select the diagnostic test you used.");
			// headerTabClick(currentSession, 'TS');
			// return;
		// }
		
		// deltaLogs += '\n\n DIAGNOSTIC:';
		
		// if($('.selDiagnosticRAN').val() == "notran") {
			// deltaLogs += '\n- NOT RUN REASON: ' + $("#" + id + " #taNoDiagRunReason").val();
		// }
		// else if($('.selDiagnosticRAN').val() == "other") {
			// deltaLogs += '\n- ' + $("#" + id + " #taOtherDiagRun").val();
		// }
		// else {
			// deltaLogs += '\n- EPSA: ';
			// if($("#" + id + " #selEpsaResult").val() == "pass") {
				// deltaLogs += "Passed";
			// }
			// else {
				// deltaLogs += "Failed" + "\n- Error Code : 2000 " + $("#" + id + " #txtErrCode").val();
				
				// deltaLogs += "\n- Validation Code : 2000 " + $("#" + id + " #txtValidationCode").val();
				// deltaLogs += "\n- Validity : 2000 " + $("#" + id + " #txtValidationDate").val();
			// }
		// }
		
		// deltaLogs += '\n- Part to replace: ' + $("#" + id + " #txtPartToReplace").val();
		
		
		
		if($("#" + id + " .selDispatchType").val() == "ndps") {
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
		
		
		deltaLogs += '\n- Service Request #: '  + $("#" + id + " .txtServiceRequest").val();
		deltaLogs += '\n- Dispatch #: '  + $("#" + id + " .txtDispatchNumber").val();
		
		deltaLogs += '\n- BTTR: ' + $("#" + id + " .txtBttr").val();
		
		deltaLogs += '\n\n- Gave Service Request Number, email: ' +  + $("#" + id + " .txtSupportEmailId").val();;
		deltaLogs += '\n- Email Address and Phone Number Obtained and Updated in SR';
		
		deltaLogs += '\n- Heat Check : '  + $("#" + id + " .selHeatCheck").val();
		deltaLogs += '\n- Self Rating : '  + $("#" + id + " .selSelfRating").val();
		
		deltaLogs += '\n- Sent Summary Email';
		
		
		
		
		
		 
		 $("#" + id + " .taDl").val(deltaLogs);
		 		 
		 var gl  = "ISSUE\n";
		 gl += '- ' + $("#" + id + " .hfIssueInShort").val();
		 gl += '\n\n';
		 
		 gl += "TS\n";
		 gl += '- ' + $("#" + id + " .taTroubleshootingLogs").val();
		 gl += '\n\n';
		 
		 gl += "SOLUTION\n";
		 gl += '- ' + $("#" + id + " .taNextAction").val() + '.' + $("#" + id + " .taDispatchNotes").val();
		 gl += '\n\n';
		 
		 gl += "PHONE\n";
		 gl += '- ' + $("#" + id + " .txtPhone").val() + '\n- ' + $("#" + id + " .txtAltPhone").val();
		 gl += '\n\n';
		 
		 gl += "BTTR\n";
		 gl += '- ' + $("#" + id + " .txtBttr").val();
		 
		 $("#" + id + " .taGl").val(gl);
		
		
		// SR TITLE and DELTA NEXT ACTION
		
		var srTitle = "";
		
		if($("#" + id + " .selDispatchType").val() == "ndps") {
			srTitle += "NDPS" + " | " +  $("#" + id + " .hfIssueInShort").val() + " | " + $("#" + id + " .taNextAction").val();
			$("#" + id + " .txtDeltaNextAction").val("Follow-up for NDPS");
		}
		else if ($("#" + id + " .selDispatchType").val() == "pos") {
			srTitle += "POS" + " | " +  $("#" + id + " .hfIssueInShort").val() + " | " + $("#" + id + " .taNextAction").val();
			$("#" + id + " .txtDeltaNextAction").val("Follow-up for POS");
		}
		else if ($("#" + id + " .selDispatchType").val() == "nbd") {
			srTitle += "NBD" + " | " +  $("#" + id + " .hfIssueInShort").val() + " | " + $("#" + id + " .taNextAction").val();
			$("#" + id + " .txtDeltaNextAction").val("Follow-up for NBD");
		}
		else {
			// ELSE RTD
			srTitle += "RTD" + " | " +  $("#" + id + " .hfIssueInShort").val() + " | " + $("#" + id + " .taNextAction").val();
			$("#" + id + " .txtDeltaNextAction").val("Follow-up for BOX");
		}
		
		$("#" + id + " .txtSrTitle").val(srTitle);
		
		
		$("#" + id + " .aCopyDl").click(function() {
			$("#" + id + " .taDl").select();
				document.execCommand('copy');
		});
		
		$("#" + id + " .aCopyGl").click(function() {
			$("#" + id + " .taGl").select();
				document.execCommand('copy');
		});
		
		$("#" + id + " .aCopySrTitle").click(function() {
			$("#" + id + " .txtSrTitle").select();
				document.execCommand('copy');
		});
		
		$("#" + id + " .aCopyDeltaNextAction").click(function() {
			$("#" + id + " .txtDeltaNextAction").select();
				document.execCommand('copy');
		});
		
		
		
		
	}
	
	
	
	
});

