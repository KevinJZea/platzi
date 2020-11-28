
class Author():
    
    def __init__(self, id, name, university, email, maxGrade, postsQuant, avgGrade):
        self._id = id
        self._name = name
        self._university = university
        self._email = email
        self._maxGrade = maxGrade
        self._postsQuant = postsQuant
        self._avgGrade = avgGrade


    # ID
    def get_Id(self):
        return self._id

    def set_Id(self, value):
        self._id = value


    # Name
    def getName(self):
        return self._name

    def setName(self, value):
        self._name = value


    # University
    def getUniversity(self):
        return self._university

    def setUniversity(self, value):
        self._university = value


    # Email
    def getEmail(self):
        return self._email

    def setEmail(self, value):
        self._email = value


    # Max Grade
    def getMaxGrade(self):
        return self._maxGrade

    def setMaxGrade(self, value):
        self._maxGrade = value


    # Posts Quant
    def getPostsQuant(self):
        return self._postsQuant

    def setPostsQuant(self, value):
        self._postsQuant = value


    # Avg Grade
    def getAvgGrade(self):
        return self._avgGrade

    def setAvgGrade(self, value):
        self._avgGrade = value


    def VerifyGrade(self):
        pass

    def CalculateAvg(self):
        pass

