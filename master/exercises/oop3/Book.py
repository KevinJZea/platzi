class Book:

    def __init__(self, id, name, author):
        self._id = id
        self._name = name
        self._author = author


    # ID
    def get_Id(self):
        return self._id

    def set_Id(self, value):
        self._id = value

    # Name
    def get_Name(self):
        return self._name

    def set_Name(self, value):
        self._name = value

    # Author
    def get_Author(self):
        return self._author

    def set_Author(self, value):
        self._author = value
    

    def borrowing(self):
        pass

    def returning(self):
        pass

