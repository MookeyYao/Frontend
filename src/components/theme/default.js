export const palatte = {
    primaryColor: 'rgb(22,203,230)',
    secondaryColor: '#f00b45',
    whiteColor: '#fff',
    textColor: '#111',
    shadow: 'rgba(0, 0, 0, 0.1) 0px 3px 3px, rgba(0, 0, 0, 0.1) 0px 3px 9px'
}

export const gutter = '16px'
export const layout = {
    contentWidth: '80%'
}

export const theme = {
    content: {
        width: layout.contentWidth
    },
    loginStyle: {
        width: layout.contentWidth,
        textAlign: 'center'
    },
    menuStyle: {
        backgroundColor: palatte.primaryColor,
        textAlign: 'center',
        padding: gutter,
        logo: {
            display: 'inline-block',
            color: palatte.whiteColor
        },
        list: {
            marginLeft: '4em',
            item: {
                display: 'inline-block',
                margin: gutter
            }
        },
        user: {
            display: 'inline-block'
        }
    },
    productsStyle: {
        width: layout.contentWidth,
        textAlign: "center",
        item: {
            display: 'inline-block',
            maxWidth: '250px',
            boxSizing: "border-box",
            boxShadow: palatte.shadow,
            borderRadius: "3px",
            padding: '20px',
            margin: '16px',
            textAlign: "center"
        }
    },
    productCardStyle: {
        display: "inline-block"
    },
    button: {
        backgroundColor: palatte.secondaryColor,
        color: palatte.whiteColor,
        border: '0px solid #fff',
        padding: '.5em',
        borderRadius: '3px'
    },
    dialogBackground: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(10, 10, 10, .3)',
        textAlign: 'center'
    },
    dialog: {
        display: 'inline-block',
        textAlign: 'left', 
        margin: 'auto',
        marginTop: '20%',
        boxSizing: "border-box",
        backgroundColor: palatte.whiteColor,
        boxShadow: palatte.shadow,
        padding: '15px 10px'
    },
    tag: {

    }
}
