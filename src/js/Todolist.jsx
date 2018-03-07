import React from 'react';

export class Todolist extends React.Component {
    
    render() {
        return (
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 col-lg-6 ">
                  <div className="card mt-5">
                    <div className="card-header">
                      <div className="input-group mb-3">
                        <form >
                          <input type="text" className="form-control" placeholder="What next?" aria-label="What next?" aria-describedby="basic-addon2"/>
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="row justify-content-between">
                            <div className="col-10 align-middle">
                              <h3>This is a to-do</h3>
                            </div>
                            <div className="col-2 text-right">
                               <button className="btn btn-outline-secondary">x</button>
                            </div>
                          </div>
                        </li >
                        <li className="list-group-item">
                          <div className="row justify-content-between">
                            <div className="col-10 align-middle">
                              <h3>This is a to-do too</h3>
                            </div>
                            <div className="col-2 text-right">
                               <button className="btn btn-outline-secondary">x</button>
                            </div>
                          </div>
                        </li >
                        <li className="list-group-item">
                          <div className="row justify-content-between">
                            <div className="col-10 align-middle">
                              <h3>Third to-do</h3>
                            </div>
                            <div className="col-2 text-right">
                               <button className="btn btn-outline-secondary">x</button>
                            </div>
                          </div>
                        </li >
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
    }
    
}