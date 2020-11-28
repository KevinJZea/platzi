
class Counter():

    def __init__(self, count, step=1):
        self.count = count
        self._step = step

    
    # Count
    def get_Count(self):
        return self.count

    def set_Count(self, value):
        self.count = value


    # Step
    def get_Step(self):
        return self._step

    def set_Step(self, value):
        self._step = value


    def increase(self, count, step):
        count += step
        return count

    def decrease(self, count, step):
        count -= step
        return count