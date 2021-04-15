function getMiddle(s) {
    var length = s.length;
    var middle = length / 2;
    let floor = Math.floor(middle);
    const middleNumber = Number(middle);
    const floorNumber = Number(floor);
    const mathNumber = middleNumber - floorNumber;
    if (mathNumber > 0) {
    let finalMiddle = s[floorNumber];
    return finalMiddle;
    } else {
    let finalMiddle1 = s[floorNumber - 1];
    let finalMiddle2 = s[floorNumber];
    return finalMiddle1 + finalMiddle2;
    }
    }
    //solution2
    function extractMiddle(str) {

        var position;
        var length;

        if(str.length % 2 == 1) {
            position = str.length / 2;
            length = 1;
        } else {
            position = str.length / 2 - 1;
            length = 2;
        }

        return str.substring(position, position + length)
    }

    console.log(extractMiddle("handbananna"));