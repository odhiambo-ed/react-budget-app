import './App.css';

function App() {
  return (
    <div className='ui container'>
      <h1 class="ui header">Budget</h1>
      <div className="ui statistic small">
        <div className="ui label">Your Balance</div>
        <div className="ui value">12,650.34</div>
      </div>
      <div className="ui segment">
        <div className="ui grid divided">
          <div className="ui row center aligned">
            <div className="ui column eight wide">
              <div className="ui label">Incoming:</div>
              <div className="ui value">10,250.12</div>
              </div>
            <div className="ui column eight wide">
              <div className="ui label">Expenses:</div>
              <div className="ui value red">2,250.42</div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="ui header">History</h3>
      <div className="ui segment red">
        <div className="ui three column grid">
          <div className="ui row">
            <div className="ui column eight wide">Something</div>
            <div className="ui column four wide">$100.00</div>
            <div className="ui column four wide">
              <i className='edit bordered icon' />
              <i className='trash bordered icon' />
            </div>
          </div>
        </div>
      </div>
      <div className="ui segment green">
        <div className="ui three column grid">
          <div className="ui row">
            <div className="ui column eight wide">Something</div>
            <div className="ui column four wide">$100.00</div>
            <div className="ui column four wide">
              <i className='edit bordered icon' />
              <i className='trash bordered icon' />
            </div>
          </div>
        </div>
      </div>
      <div className="ui segment red">
        <div className="ui three column grid">
          <div className="ui row">
            <div className="ui column eight wide">Something</div>
            <div className="ui column four wide">$100.00</div>
            <div className="ui column four wide">
              <i className='edit bordered icon' />
              <i className='trash bordered icon' />
            </div>
          </div>
        </div>
      </div>

      <h3 className='ui header'></h3>

    </div>
  );
}

export default App;
