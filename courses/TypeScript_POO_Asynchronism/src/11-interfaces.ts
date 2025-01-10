interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

const driver: Driver = {
  database: '',
  password: '',
  port: 23,
  connect: function (): void {
    throw new Error('Function not implemented.');
  },
  disconnect: function (): void {
    throw new Error('Function not implemented.');
  },
  isConnected: function (name: string): boolean {
    return true;
  },
};

class PostgreDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {}
  disconnect(): void {
    throw new Error('Method not implemented.');
  }
  isConnected(name: string): boolean {
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {}
  disconnect(): void {
    throw new Error('Method not implemented.');
  }
  isConnected(name: string): boolean {
    return true;
  }
}
