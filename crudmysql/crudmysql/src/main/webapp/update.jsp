
<!DOCTYPE html>
<html>
<head>
    <title>Update Student</title>

    <style>
        body {
            font-family: Arial;
            background: aliceblue;
        }

        .header {
            background: lightsteelblue;
            color: white;
            text-align: center;
            padding: 10px;
        }

        .container {
            width: 80%;
            margin: 20px auto;
        }

        .box {
            background: white;
            padding: 20px;
        }
        
        label {
            display: inline-block;
            width: 120px;
        }

        input {
            padding: 5px;
            margin-bottom: 10px;
        }

        input[type="submit"] {
            background: cornflowerblue;
            color: white;
            border: none;
        }
    </style>
</head>

<body>

    <div class="header">
        <h2 style="color:black">CRUD OPERATIONS USING MYSQL WITHOUT API</h2>
    </div>

    <div class="container">
        <div class="box">

            <h2>UPDATE STUDENT</h2>

            <form action="updStu">

                <label>Student Id:</label>
                <input type="text" name="sid" value="${student.sid}" readonly>
                <br>

                <label>Student Name:</label>
                <input type="text" name="sname" value="${student.sname}">
                <br>

                <label>College Name:</label>
                <input type="text" name="college" value="${student.college}">
                <br>

                <label>Address:</label>
                <input type="text" name="address" value="${student.address}">
                <br>

                <input type="submit" value="Update Student">

            </form>

        </div>
    </div>

</body>
</html>
