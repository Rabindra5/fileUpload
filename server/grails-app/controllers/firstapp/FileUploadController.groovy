package firstapp


import grails.rest.*
import grails.converters.*
import org.springframework.web.bind.annotation.RestController

class FileUploadController {

	static responseFormats = ['json', 'xml']

    def index() {
        println("Inside index")
        render(view:"UploadFile")
    }
    def saveFile()
    {
        println("Inside Controller")
        println(params)
//        def paramsData = request.getJSON() // This is for dynamic data sent from client side in JSON format
//        println(paramsData)
        def file = params.file
        println file
        if(!file.empty){

            File newFile = new File( 'E:\\workspace\\FirstApp\\client\\src\\assets\\myImages', file.originalFilename)
            file.transferTo(newFile)
        }

        render( [msg:"Rendering Success"] as JSON)
    }
}
