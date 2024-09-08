const { exec } = require('child_process');

// use exec for copy user name
exec('git config user.name', (error, stdout, stderr) => {
    if (error) {
        console.error(`�������: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`�������: ${stderr}`);
        return;
    }
    //delete white
    const githubUsername = stdout.trim();
    console.log(`Hello, ${githubUsername}`);
});