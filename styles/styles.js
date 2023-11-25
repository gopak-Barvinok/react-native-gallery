import tw from 'twrnc'

const Styles = {
    blocks: {
        background: tw`flex-1 justify-center items-center bg-red-200`,
        card: tw`border-2 border-white bg-black rounded-lg flex items-center justify-center h-90 w-90 my-1`,
        text: tw`text-white mt-2`,
    },

    image: {
        width: 300,
        height: 300,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5
    },

    bigImage: {
        width: 500,
        height: 500,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5
    }
}

export default Styles 
