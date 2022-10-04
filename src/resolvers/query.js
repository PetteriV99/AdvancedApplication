module.exports = {
    notes: async (parent, args, { models }) => {
        return await models.Note.find({ disabled: false });
    },
    note: async (parent, args, { models }) => {
        return await models.Note.findById(args.id);
    }
};