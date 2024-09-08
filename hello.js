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
    const gitUser = stdout.trim();
    console.log(`Hello, ${gitUser}`);
});
exec ('git config user.email' , (error, stdout, stderr) =>{
if (error) {
console.error(`�������: ${error.message}`);
return;
}
if (stderr) {
        console.error(`�������: ${stderr}`);
        return;
    }
const gitUseremail = stdout.trim();
console.log(`Your email:, ${gitUseremail}`);

});