const fs = require('fs');

fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}',(err)=>{
    if(err) console.log(err);
    else read();
});

const read = () => {
    fs.readFile('employees.json', 'utf-8', (err,data)=>{
        if(err) console.log(err);
        else console.log(data);
        update();
    }
    );
}

const update = () => {
    fs.appendFile('employees.json', 'utf-8', (err,data)=>{
        if(err) console.log(err);
        else console.log("Update");
        deleteFile();
    }
    );
}

const deleteFile = () => {
    fs.unlink('employees.json', (err)=>{
        if(err) console.log(err);
        else console.log("File Deleted");
    }
    );
}