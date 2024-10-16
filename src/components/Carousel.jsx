import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, Paper } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Carousal = (props) => {
	

	return (
		<Box sx={{ maxWidth: "550px", margin: "auto", padding: "20px" }}>
			<Carousel
				showArrows={true}
				showStatus={false}
				showThumbs={false}
				showIndicators={false}
				infiniteLoop={true}
				autoPlay={true}
				interval={3000}
				stopOnHover={true}
				sx={{
					width: "100%",
					// Fixed height for carousel
				}}
			>
				{props.items.map((item) => (
					<Paper
						key={item.id}
						elevation={3}
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							position: "relative",
							overflow: "hidden",
							backgroundColor: "black", // Set the background color of our techkriya theme
						}}
					>
						<img
							src={item.image}
							alt={item.title}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "contain",

								top: 0,
								left: 0,
							}}
						/>
					</Paper>
				))}
			</Carousel>
		</Box>
	);
};

export default Carousal;
