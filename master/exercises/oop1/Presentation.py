from Contribution import Contribution

class Presentation(Contribution):
    
    def __init__(self, id, title, idAuthor, grade, publicationDate, mainTheme):
        super().__init__(self, title, idAuthor, grade)
        self._publicationDate = publicationDate
        self._mainTheme = mainTheme


    # Publication Date
    def getPublicationDate(self):
        return self._publicationDate

    def setPublicationDate(self, value):
        self._publicationDate = value


    # Main Theme
    def getMainTheme(self):
        return self._mainTheme

    def setMainTheme(self, value):
        self._mainTheme = value
