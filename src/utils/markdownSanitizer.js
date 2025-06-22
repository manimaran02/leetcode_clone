const marked = require('marked')

const sanitizeHtml = require('sanitize-html')

const turndown = require('turndown')

function markDown(markdownContent){

    const htmlContent = marked.parse(markdownContent)

    // console.log(htmlContent) 
    
    const turndownService = new turndown()
    
    const sanitizeHTML = sanitizeHtml(htmlContent,{allowedTags : sanitizeHtml.defaults.allowedTags.concat(['img'])})

    // console.log(sanitizeHTML)

    const sanitizeMarkdwon = turndownService.turndown(sanitizeHTML)

    // console.log(sanitizeMarkdwon)

    return sanitizeMarkdwon


}


// const val = `I just love **bold text**.
//               Love**is**bold  
//              <script>MAddy Freak</script>  `

//               markDown(val)

module.exports = markDown