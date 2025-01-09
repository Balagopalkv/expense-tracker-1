'use server';
import { auth } from "@clerk/nextjs/server";

interface TransactionData {
    text : string;
    amount: number;

}

interface TransactionResult {
    data?: TransactionData;
    error?: string
}

async function addTransaction (formData : FormData):
Promise<TransactionResult> {
    const textValue = formData.get('text');
    const amountValue = formData.get('amount');

    //Check for input values
    if (!textValue || textValue === '' || !amountValue){
        return {error: 'Text or Amount is missing'};
    }

    const text: string = textValue.toString(); // Ensure text is string
    const amount: number = parseFloat(amountValue.toString()); // Parse amount as number

    //Get logged in user
    const userId = auth();
    
    //Check for user
    if (!userId) {
        return {error: 'User Not Found'}
    }
    
    const transactionData: TransactionData = {
        text,
        amount
    };

    return {data: transactionData };
}

export default addTransaction;
