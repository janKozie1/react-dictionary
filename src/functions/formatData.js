export let formatData = (data) => {
    console.log(data.shortdef)
    return {
        word: data.hwi ? data.hwi.hw.replace(/\*/g, "•") : '',
        date: data.date ? data.date.indexOf('{') !== -1 ? data.date.substring(0, data.date.indexOf('{')) : data.date : 'No date',
        grFunction: data.fl,
        shortdef: data.shortdef.length ? data.shortdef[0] ? data.shortdef.map((e) => e.replace(/^[—–]/g, "")) : [`${data.cxs[0].cxl} ${data.cxs[0].cxtis[0].cxt}`] : [''],
    }
}