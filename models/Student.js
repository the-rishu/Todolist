import moongoose from 'mongoose'

// Defining Schema

const studentSchema = new moongoose.Schema ({
    name : {type:String , required : true , trim:true},
    age : {type:Number , required:true,min:18 , max:60},
    fees :{type:moongoose.Decimal128 , required:true,validate:(value) => value >= 5000.5}
})

// Model

const StudentModel = moongoose.model("student",studentSchema)

export default StudentModel