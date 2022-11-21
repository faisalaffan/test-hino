import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import {IndexComponentStruct} from "./modules/struct/IndexComponentStruct";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: new IndexComponentStruct()
        }
    }

    form = () => {
        return (
            <>
                {JSON.stringify(this.state.payload)}
                <table>
                    <tr>
                        <td>
                            <label htmlFor="">BDS DOC NO</label>
                        </td>
                        <td>
                            <input type="text" onChange={(v) => {
                                this.setState({payload: {...this.state.payload, bdsDocNo: v.target.value}})
                            }}/>
                        </td>
                        <td>
                            <label htmlFor="">Bank Name</label>
                        </td>
                        <td>
                            <input type="text" onChange={(v) => {
                                this.setState({payload: {...this.state.payload, bankName: v.target.value}})
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">BDS DOC Date</label>
                        </td>
                        <td>
                            <input type="text" onChange={(v) => {
                                this.setState({payload: {...this.state.payload, bdsDocDate: v.target.value}})
                            }}/>
                        </td>
                        <td>
                            <label htmlFor="">Bank Account</label>
                        </td>
                        <td>
                            <select name="bankName" id="" onChange={(v) => {
                                this.setState({payload: {...this.state.payload, bankAccount: v.target.value}})
                            }}>
                                <option value="BCA">BCA</option>
                                <option value="MANDIRI">MANDIRI</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">Supplier</label>
                        </td>
                        <td>
                            <input type="text" onChange={(v) => {
                                this.setState({payload: {...this.state.payload, supplier: v.target.value}})
                            }}/>
                        </td>
                        <td>
                            <label htmlFor="">Bank Account Name</label>
                        </td>
                        <td>
                            <input type="text" onChange={(v) => {
                                this.setState({payload: {...this.state.payload, bankAccountName: v.target.value}})
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">Supplier Tax ID</label>
                        </td>
                        <td>
                            <input type="text" onChange={(v) => {
                                this.setState({payload: {...this.state.payload, supplierTaxId: v.target.value}})
                            }}/>
                        </td>
                        <td>
                            <label htmlFor="">Support Doc</label>
                        </td>
                        <td>
                            <input type="file" onChange={(v) => {
                                this.setState({payload: {...this.state.payload, supportDoc: v.target.value}})
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">Transaction Type</label>
                        </td>
                        <td>
                            <input type="text" onChange={(v) => {
                                this.setState({payload: {...this.state.payload, transactionType: v.target.value}})
                            }}/>
                        </td>
                        <td>
                            <label htmlFor="">Payment Plan Date</label>
                        </td>
                        <td>
                            <input type="date" onChange={(v) => {
                                this.setState({payload: {...this.state.payload, paymentPlanDate: v.target.value}})
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                        <td>
                            <label htmlFor="">Payment Paid Date</label>
                        </td>
                        <td>
                            <input type="date" onChange={(v) => {
                                this.setState({payload: {...this.state.payload, paidDate: v.target.value}})
                            }}/>
                        </td>
                    </tr>
                </table>
            </>
        )
    }

    table = () => {
        return (
            <>
                <div style={{width: '100vw', overflowX: 'scroll'}}>
                    <table>
                        <tr>
                            <td colSpan={11}>
                                <h1>Invoice List</h1>
                            </td>
                        </tr>
                        <tr>
                            <td>Invoice Doc</td>
                            <td>Invoice Date</td>
                            <td>Top</td>
                            <td>Invoice Due Date</td>
                            <td>Faktur Pajak No</td>
                            <td>PPN Rate</td>
                            <td>Desc</td>
                            <td>Grand Total</td>
                            <td>Before Tax</td>
                            <td>PPH Prepaid</td>
                            <td>Grand Total After Tax</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" disabled={true}/>
                            </td>
                            <td>
                                <input type="date" disabled={false}/>
                            </td>
                            <td>
                                <input type="text" disabled={false}/>
                            </td>
                            <td>
                                <input type="text" disabled={true}/>
                            </td>
                            <td>
                                <input type="text" disabled={false}/>
                            </td>
                            <td>
                                <input type="text" disabled={false}/>
                            </td>
                            <td>
                                <input type="text" disabled={false}/>
                            </td>
                            <td>
                                <input type="text" disabled={false}/>
                            </td>
                            <td>
                                <input type="text" disabled={true}/>
                            </td>
                            <td>
                                <input type="text" disabled={false}/>
                            </td>
                            <td>
                                <input type="text" disabled={true}/>
                            </td>
                        </tr>
                    </table>
                </div>
            </>
        )
    }

    render() {
        return (
            <>
                {this.form()}
                {this.table()}
            </>
        );
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
