
class Account():
    
    def __init__(self, id, pin):
        self._id = id
        self._pin = pin


    # ID
    def get_Id(self):
        return self._id

    def set_Id(self, value):
        self._id = value


    # PIN
    def get_Pin(self):
        return self._pin

    def set_Pin(self, value):
        self._pin = value


    def deposit(self):
        pass

    def refund(self): # Withdraw
        pass
    
    def transfer(self):
        pass