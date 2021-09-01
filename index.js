const findDuplicateCharacterInString = (input)=>{
    let out = [];
    if(input.length < 1)
        return `There are no duplicates in the input string`;

    else{

        let ch;
        const size = input.length; 

        for(let i = 0 ; i < size; i+=1){
            let ch = input.charAt(i);

            let subStr = input.slice(i+1, size);


            if(subStr.includes(ch))
                out.push(ch);
        }
    }

    return out;
}

module.exports.findDuplicateCharacterInString = findDuplicateCharacterInString;
