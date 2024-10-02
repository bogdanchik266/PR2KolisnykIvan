<?php
class Student {
    public $students = [
        ['Кіт', 'Іван', 20, 'Київ', '+380987654321'],
        ['Сухачьов', 'Петро', 21, 'Львів', '+380987654322'],
        ['Ковпак', 'Владислав', 22, 'Одеса', '+380987654323'],
        ['Коваль', 'Олександр', 23, 'Харків', '+380987654324'],
        ['Бойко', 'Пилип', 24, 'Дніпро', '+380987654325'],
        ['Кириленко', 'Ілля', 25, 'Чернівці', '+380987654326']
    ];

 
   public function updateAges() {
    foreach ($this->students as $key => $student) {
        if (($key + 1) % 3 == 0) {
            $this->students[$key][2] = 8;
        } elseif (($key + 1) % 2 == 0) {
            $this->students[$key][2] = 7;
        } else {
            $this->students[$key][2] = 9;
        }
    }
}



    public function calculateTotalAge() {
        $total = 0;
        foreach ($this->students as $student) {
            $total += $student[2];
        }
        return $total;
    }


    public function addStudent($newStudent) {
        if (is_array($newStudent) && isset($newStudent[0], $newStudent[1], $newStudent[2], $newStudent[3], $newStudent[4])) {
            $this->students[] = $newStudent;
        }
    }
}
