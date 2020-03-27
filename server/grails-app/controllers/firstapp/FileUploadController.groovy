package firstapp


import grails.rest.*
import grails.converters.*
import org.springframework.util.FileCopyUtils
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

            File newFile = new File( "images", file.originalFilename)
//            println(newFile.getAbsolutePath())
//            file.transferTo(newFile)// It tries to save to temp file..
            FileCopyUtils.copy(file.getBytes(), newFile); // given by Spring FrameWork and it works well


        }

        render( [msg:"Rendering Success"] as JSON)
    }
}
