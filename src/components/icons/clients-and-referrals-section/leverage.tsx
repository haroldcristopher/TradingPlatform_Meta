import React from 'react';
import { cn } from '@/lib/utils';


const LeverageIcon = ({ className }: { className: string }) => {
    return (
        <svg width="88" height="80" viewBox="0 0 88 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className, "")}
        >
            <g clipPath="url(#clip0_17_11668)">
                <g clipPath="url(#clip1_17_11668)">
                    <g clipPath="url(#clip2_17_11668)">
                        <g opacity="0.1">
                            <path d="M2.18805 20.2472C5.47387 37.6355 -1.2782 51.2821 0.307726 59.6581C1.89366 68.034 10.0322 84.7195 48.5789 77.4357C87.1255 70.1518 88.3126 45.4132 86.5652 36.2015C78.4171 -6.96048 -3.65235 -10.5502 2.18805 20.2472Z" fill="#4480AD" />
                        </g>
                        <path d="M18.7889 6.0498C19.5381 6.04986 20.2706 6.2715 20.8943 6.68684C21.5179 7.10218 22.0047 7.69266 22.2936 8.38401C22.5824 9.07536 22.6604 9.83669 22.5176 10.5722C22.3748 11.3078 22.0178 11.9847 21.4912 12.5177C20.9647 13.0508 20.2923 13.4163 19.5586 13.5682C18.8249 13.7201 18.0627 13.6516 17.3678 13.3714C16.6729 13.0911 16.0764 12.6116 15.6534 11.9932C15.2303 11.3748 14.9996 10.6451 14.9902 9.89592C15.0026 8.89229 15.4067 7.93323 16.1164 7.2235C16.8262 6.51377 17.7852 6.1096 18.7889 6.09729V6.0498ZM18.7889 11.1685C19.0428 11.1685 19.2911 11.093 19.5021 10.9517C19.7131 10.8104 19.8775 10.6096 19.9742 10.3748C20.0709 10.14 20.0958 9.88174 20.0455 9.6328C19.9953 9.38385 19.8722 9.15544 19.692 8.97652C19.5117 8.79761 19.2824 8.67626 19.0331 8.62787C18.7838 8.57948 18.5257 8.60623 18.2916 8.70472C18.0575 8.80321 17.858 8.96901 17.7183 9.18109C17.5785 9.39317 17.5049 9.64196 17.5068 9.89592C17.5093 10.2343 17.6455 10.5579 17.8857 10.7963C18.1258 11.0347 18.4505 11.1685 18.7889 11.1685Z" fill="#919FB2" />
                        <path d="M66.3467 21.4629H18.4269C17.5059 21.4654 16.6233 21.8324 15.972 22.4837C15.3207 23.135 14.9537 24.0176 14.9512 24.9386V33.3621L16.5751 33.761V24.9386C16.5749 24.443 16.7685 23.967 17.1145 23.6121C17.4605 23.2573 17.9315 23.0517 18.4269 23.0393H66.3467C66.8504 23.0393 67.3335 23.2394 67.6897 23.5956C68.0459 23.9518 68.246 24.4349 68.246 24.9386V56.4863C68.246 56.99 68.0459 57.4731 67.6897 57.8293C67.3335 58.1855 66.8504 58.3856 66.3467 58.3856H18.4269C17.9315 58.3732 17.4605 58.1677 17.1145 57.8128C16.7685 57.4579 16.5749 56.9819 16.5751 56.4863V38.5378L14.9512 38.1579V56.4863C14.9537 57.4073 15.3207 58.29 15.972 58.9412C16.6233 59.5925 17.5059 59.9595 18.4269 59.962H66.3467C67.2703 59.9621 68.1563 59.5965 68.8112 58.9452C69.466 58.2939 69.8364 57.4099 69.8414 56.4863V24.9386C69.8364 24.0151 69.466 23.131 68.8112 22.4798C68.1563 21.8285 67.2703 21.4629 66.3467 21.4629Z" fill="#001939" />
                        <path d="M26.0718 33.333V45.7545H23.9921V35.7072L21.0766 37.6065L20.127 36.049L24.163 33.352L26.0718 33.333Z" fill="#E93344" />
                        <path d="M30.1367 40.0568V37.3408H32.3494V40.0568H30.1367ZM30.1367 45.7548V43.0483H32.3494V45.7548H30.1367Z" fill="#E93344" />
                        <path d="M42.5966 33.3329V35.1373H36.8417L36.5188 38.4136C37.2972 38.0591 38.1421 37.8746 38.9974 37.8723C41.6564 37.8723 42.986 39.1068 42.986 41.5949C43.0259 42.1808 42.949 42.7687 42.7599 43.3246C42.5708 43.8805 42.2732 44.3933 41.8844 44.8333C41.4721 45.2247 40.9836 45.5271 40.4493 45.7216C39.915 45.916 39.3465 45.9983 38.779 45.9634C38.1428 45.9548 37.5081 45.9008 36.8797 45.8019C36.1484 45.6975 35.6071 45.5835 35.1988 45.4885L34.5625 45.3176L34.7904 43.7412C36.0446 43.9669 37.3149 44.0907 38.589 44.1115C38.9019 44.1449 39.2183 44.1075 39.5148 44.0021C39.8113 43.8967 40.0802 43.726 40.3018 43.5026C40.5234 43.2792 40.6919 43.0088 40.7949 42.7115C40.8979 42.4141 40.9327 42.0975 40.8967 41.7849C40.9231 41.4952 40.8894 41.2032 40.7979 40.927C40.7064 40.6509 40.559 40.3966 40.3649 40.1799C39.9856 39.8552 39.496 39.6886 38.9974 39.7146C38.1556 39.6877 37.3159 39.8132 36.5188 40.085L36.1769 40.2179L34.8664 39.9425L35.1988 33.2949L42.5966 33.3329Z" fill="#E93344" />
                        <path d="M45.7675 34.6443C46.1917 34.1297 46.7328 33.7241 47.3458 33.4614C47.9587 33.1988 48.6256 33.0866 49.2907 33.1343C49.9551 33.0855 50.6215 33.1961 51.2344 33.4572C51.8472 33.7182 52.3888 34.1219 52.814 34.6348C53.5832 35.6414 53.9725 37.2938 53.9725 39.611C53.9725 41.9281 53.5832 43.5615 52.8045 44.5207C52.3678 45.0161 51.8227 45.4041 51.2117 45.6545C50.6006 45.9048 49.94 46.0108 49.2812 45.9642C48.6248 46.0105 47.9665 45.9052 47.3573 45.6566C46.748 45.408 46.2041 45.0226 45.7675 44.5302C44.9761 43.5805 44.5836 41.9471 44.5899 39.63C44.5963 37.3128 44.9888 35.6509 45.7675 34.6443ZM51.228 35.9833C51.0381 35.6527 50.7597 35.3816 50.4242 35.2004C50.0887 35.0193 49.7093 34.9352 49.3287 34.9576C48.9408 34.9294 48.5527 35.0106 48.2086 35.1919C47.8644 35.3732 47.578 35.6474 47.3819 35.9833C46.9007 37.1187 46.6988 38.3529 46.7931 39.5825C46.6939 40.8017 46.9029 42.0264 47.4009 43.1437C47.6044 43.4566 47.8877 43.7095 48.2216 43.8765C48.5555 44.0434 48.9278 44.1183 49.3002 44.0934C49.6733 44.1234 50.0475 44.0508 50.3823 43.8834C50.7171 43.716 50.9997 43.4602 51.1995 43.1437C51.6889 42.0239 51.8944 40.8007 51.7978 39.5825C51.8931 38.3546 51.6979 37.1216 51.228 35.9833Z" fill="#E93344" />
                        <path d="M56.2992 34.644C56.7239 34.13 57.2651 33.7249 57.8779 33.4622C58.4907 33.1996 59.1574 33.0871 59.8224 33.134C60.487 33.0836 61.1539 33.1935 61.767 33.4547C62.3801 33.7158 62.9216 34.1204 63.3457 34.6345C64.1244 35.6411 64.5138 37.2935 64.5138 39.6107C64.5138 41.9278 64.1149 43.5612 63.3362 44.5204C62.8995 45.0158 62.3544 45.4038 61.7434 45.6542C61.1323 45.9045 60.4717 46.0105 59.8129 45.9639C59.1566 46.0095 58.4985 45.9039 57.8894 45.6553C57.2803 45.4067 56.7362 45.0217 56.2992 44.5299C55.5268 43.5802 55.1406 41.9468 55.1406 39.6297C55.1406 37.3125 55.5268 35.6506 56.2992 34.644ZM61.7882 35.983C61.5999 35.6509 61.3219 35.3785 60.986 35.1972C60.6501 35.0158 60.2699 34.9327 59.8889 34.9573C59.5088 34.9381 59.1307 35.0236 58.7958 35.2045C58.4609 35.3853 58.182 35.6546 57.9896 35.983C57.5133 37.1198 57.3116 38.3528 57.4008 39.5822C57.3015 40.8014 57.5106 42.0261 58.0086 43.1434C58.2121 43.4563 58.4954 43.7092 58.8293 43.8762C59.1631 44.0431 59.5355 44.118 59.9079 44.0931C60.2809 44.1221 60.6547 44.049 60.9893 43.8817C61.3239 43.7144 61.6067 43.4592 61.8072 43.1434C62.2867 42.0209 62.4887 40.7993 62.396 39.5822C62.4793 38.3513 62.271 37.1182 61.7882 35.983Z" fill="#E93344" />
                    </g>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_17_11668">
                    <rect width="87" height="79.23" fill="white" transform="translate(0.0507812)" />
                </clipPath>
                <clipPath id="clip1_17_11668">
                    <rect width="87" height="79.23" fill="white" transform="translate(0.0507812)" />
                </clipPath>
                <clipPath id="clip2_17_11668">
                    <rect width="86.9792" height="79.23" fill="white" transform="translate(0.0605469)" />
                </clipPath>
            </defs>
        </svg>

    );
};

export default LeverageIcon;