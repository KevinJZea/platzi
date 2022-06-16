<?php

class Account {
    public $id = integer;
    public $name = string;
    public $document = string;
    public $email = string;
    public $password = string;

    public function __construct($name, $document, $email, $password) {
        $this->name = $name;
        $this->document = $document;
        $this->email = $email;
        $this->password = $password;
    }
}
?>