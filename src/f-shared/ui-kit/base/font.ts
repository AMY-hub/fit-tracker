import localFont from 'next/font/local';

export const mainFont = localFont({
    src: [
        {
            path: '../../assets/fonts/Poppins-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/Poppins-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/Poppins-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        }
    ],
    fallback: ['system-ui', 'arial']
});