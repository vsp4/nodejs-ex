var fs=require('fs');

function functest()
{
	fs.appendFile('test.txt', new Date().toString() + "\n",function(err){
		if(err)
			console.error(err);
  		console.log('Appended!');
	});
}

functest();