
<!DOCTYPE html>
<html>
<head>
    <title>Searched Student</title>

    <style>
        body {
            font-family: Arial;
            background: aliceblue;
        }

        .student {
            background: white;
            width: 400px;
            padding: 20px;
            margin: auto;
        }
    </style>
</head>

<body>

    <div class="student">

        <h2>Searched Student</h2>

        <p>Student Id: ${student.sid}</p>
        <p>Student Name: ${student.sname}</p>
        <p>Student College: ${student.college}</p>
        <p>Address: ${student.address}</p>

    </div>
</body>
</html>
