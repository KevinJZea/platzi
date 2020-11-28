from Contribution import Contribution

class Workshop(Contribution):

    def __init__(self, id, title, idAuthor, grade, maxCapacity, duration):
        super().__init__(self, title, idAuthor, grade)
        self._maxCapacity = maxCapacity
        self._duration = duration


    # Max Capacity
    def getMaxCapacity(self):
        return self._maxCapacity

    def setMaxCapacity(self, value):
        self._maxCapacity = value


    # Duration
    def getDuration(self):
        return self._duration

    def setDuration(self, value):
        self._duration = value
