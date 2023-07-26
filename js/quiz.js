function submitQuiz()
{
	console.log("DONE");

	function answerScore(qname)
	{
		var radioNo = document.getElementsByName(qname);

		for(var i = 0, length = radioNo.length; i < length; i++)
		{
			if(radioNo[i].checked)
			{
				var answerValue = Number(radioNo[i].value)
			}
		}
		if(isNaN(answerValue))
		{
			answerValue = 0;
		}
		return answerValue;
	}

	var calcScore = (answerScore('q1')+answerScore('q2')+answerScore('q3')+answerScore('q4')+answerScore('q5')+answerScore('q6'))

	console.log(calcScore);

	function correctAnswer(correctStringNo, qNumber)
	{
		console.log("QNO " + qNumber);

		return "Correct Answer for Question : "+qNumber+" is = "+document.getElementById(correctStringNo).innerHTML;
	}

	if(answerScore('q1') === 0)
	{
		document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1',1);
	}

	if(answerScore('q2') === 0)
	{
		document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2',2);
	}
	
	if(answerScore('q3') === 0)
	{
		document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3',3);
	}

	if(answerScore('q4') === 0)
	{
		document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4',4);
	}

	if(answerScore('q5') === 0)
	{
		document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5',5);
	}

	if(answerScore('q6') === 0)
	{
		document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6',6);
	}

	if(answerScore('q1')===0)
	{
		document.getElementById('correctAnswer1')
	}

	var questionCountArray = document.getElementsByClassName('question');
	var questionCounter = 0;
	for(var i = 0, length = questionCountArray.length; i < length; i++)
	{
		questionCounter++;
	}

	var showScore = "You Scored " + calcScore + "out of " + questionCounter;
	if (calcScore === questionCounter)
	{
		showScore = " Full Marks!!";
	}

	document.getElementById('userScore').innerHTML = showScore;
}