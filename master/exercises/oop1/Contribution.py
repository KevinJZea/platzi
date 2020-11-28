
class Contribution():
    
    def __init__(self, id, title, idAuthor, grade):
        self._id = id
        self._title = title
        self._idAuthor = idAuthor
        self._grade = grade


    # ID
    def getId(self):
        return self._id

    def setId(self, value):
        self._id = value


    # Title
    def getTitle(self):
        return self._title

    def setTitle(self, value):
        self._title = value


    # ID Author
    def getIdAuthor(self):
        return self._idAuthor

    def setIdAuthor(self, value):
        self._idAuthor = value


    # Grade
    def getGrade(self):
        return self._grade

    def setGrade(self, value):
        self._grade = value


    def UpdateAuthor(self):
        pass
    