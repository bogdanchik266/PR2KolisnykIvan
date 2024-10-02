<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя сторінка</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Моя особиста сторінка</h1>
        <nav>
            <ul>
                <li><a href="#">Головна</a></li>
                <li><a href="#">Про мене</a></li>
                <li><a href="#">Контакти</a></li>
            </ul>
        </nav>
    </header>
    <div class="profile">
        <div class="photo">
            ?
        </div>
        <div class="details">
            <h2>Колісник Іван Станіславович</h2>
            <div class="info">
                <p>Вік: 18 років</p>
                <p>Місце народження: Запоріжжя</p>
                <p>Телефон: +380687445422</p>
            </div>
        </div>
    </div>
    
    <section class="students">
        <h2>Студенти</h2>
        <table>
            <tr>
                <th>Прізвище</th>
                <th>Ім'я</th>
                <th>Вік</th>
                <th>Місце народження</th>
                <th>Номер телефону</th>
            </tr>
            <?php
         
            require_once 'Student.php';

           
            $studentObj = new Student();

      
            $studentObj->addStudent(['Новий', 'Студент', 19, 'Житомир', '+380987654327']);

            $studentObj->updateAges();

        
            foreach ($studentObj->students as $student) {
                echo "<tr>";
                foreach ($student as $info) {
                    echo "<td>$info</td>";
                }
                echo "</tr>";
            }


            $total = $studentObj->calculateTotalAge();
            ?>
        </table>
    </section>
    
    <div class="total-age">
        <p>Загальний вік студентів - <?php echo $total; ?></p>
    </div>
    
    <footer>
        <p>© 2024 Моя особиста сторінка</p>
    </footer>
</body>
</html>
