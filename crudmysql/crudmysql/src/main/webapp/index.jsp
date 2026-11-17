
<!DOCTYPE html>
<html>
<head>
    <title>CRUD Operations</title>

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
            padding: 15px;
            margin-bottom: 15px;
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
            padding: 8px;
        }
    </style>
</head>

<body>

    <div class="header">
        <h2 style="color:black">CRUD OPERATIONS USING MYSQL WITHOUT API</h2>
    </div>

    <div class="container">

        <div class="box">
            <h2>ADD STUDENTS</h2>
            <form action="addStu">
                <label>Student Id:</label>
                <input type="text" name="sid"><br>

                <label>Student Name:</label>
                <input type="text" name="sname"><br>

                <label>College Name:</label>
                <input type="text" name="college"><br>

                <label>Address:</label>
                <input type="text" name="address"><br>

                <input type="submit" value="Add Student">
            </form>
        </div>

        <div class="box">
            <h2>GET STUDENT</h2>
            <form action="getStu">
                <label>Student Id:</label>
                <input type="text" name="sid"><br>
                <input type="submit" value="Get Student">
            </form>
        </div>

        <div class="box">
            <h2>DELETE STUDENT</h2>
            <form action="delStu">
                <label>Student Id:</label>
                <input type="text" name="sid"><br>
                <input type="submit" value="Delete Student">
            </form>
        </div>

        <div class="box">
            <h2>UPDATE STUDENT</h2>
            <form action="updStu">
                <label>Student Id:</label>
                <input type="text" name="sid"><br>
                <input type="submit" value="Update Student">
            </form>
        </div>

    </div>

</body>
</html>
