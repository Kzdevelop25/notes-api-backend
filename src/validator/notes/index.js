const InvariantError = require("../../exceptions/InvariantError");
const { NotePayloadShema } = require("./schema")

const NotesValidator = {
    validateNotePayload: (payload) => {
        validationResult = NotePayloadShema.validate(payload);
        if(validationResult.error){
            throw new InvariantError(validationResult.error.message)
        }
    },
}

module.exports = NotesValidator;