import getUserBalance from "../actions/getUserBalance";

const Balance = async () => {
    const { balance }= await getUserBalance();
    return ( <>
    <h4>Your Balance</h4>
    <h1>${balance ?? 0}</h1>
    </> );
}
 
export default Balance;