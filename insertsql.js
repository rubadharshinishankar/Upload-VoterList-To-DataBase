const reader = require("xlsx");
const file = reader.readFile("./VoterList1.xlsx");

let data = [];

const sheets = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.forEach((res) => {
    data.push(res);
  });
}

console.log(data);

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "Welcome123",
  database: "bjp",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  data.map((item, i) =>
    connection.query(
      `INSERT INTO VoterList (StateName
       , DistrictName
       ,Constituency
       ,BoothNumber
       ,SerialNumber
       ,VoterNumber
       ,VoterName
       ,VoterGaurdian
       ,VoterAddress
       ,VoterAge
       ,VoterGender



) VALUES (?,?,?,?,?,?,?,?,?,?,?);`,
      [
        item.StateName,
        item.DistrictName,
        item.Constituency,
        item.BoothNo,
        item.SerialNo,
        item.VoterNumber,
        item.VoterName,
        item.VoterGaurdian,
        item.VoterHouse,
        item.VoterAge,
        item.voterGender,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        //console.log("Row inserted successfully");
      }
    )
  );
});
