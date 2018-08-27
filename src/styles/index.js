import styled, { css } from 'styled-components';

export const AppWrapper = styled.div`
	font-family: 'Pragati Narrow', sans-serif;
	
	h1, h2, h3, h4 {
		font-family: 'Questrial', sans-serif;
	}
`;

export const Main = styled.div`
	display: flex;

	@media (max-width: 600px) {
		flex-direction: column;
		
		.article-list {
			order: 2;
		}

		.article {
			order: 1;
		}
	}	
`;

export const ArticleIcon = styled.div`
	z-index: 2;
	position: relative;
	color: black;
	text-decoration: underline;

	&:hover, &.isActive {
		color: #FFFFFF;
		&::after {
			${props => css`background-image: url("${props.imageUrl}");`}
			content: "";
			display: block;
			position: absolute;
			z-index: -1;   
			width: 100%;
			height: 100%;
			background-size: cover;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			filter: brightness(40%);
		}
	}
`;

export const ImageWrapper = styled.div`
	img {
		object-fit: cover;
		width: 100%;
		height: 50%;
	}
`;
