import mongoose from "mongoose";

const wantToBecomeAgentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const WantToBecomeAgentModel = mongoose.model('WantToBecomeAgent', wantToBecomeAgentSchema);

export default WantToBecomeAgentModel;
