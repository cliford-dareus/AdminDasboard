import React from "react";
import styles from './productCard.module.css';

export const Product = ({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat,
  }) => {
  
    return (
      <div
        className={styles.card}
      >
        <CardContent>
          <p
            sx={{ fontSize: 14 }}
            color={theme.palette.secondary[700]}
            gutterBottom
          >
            {category}
          </p>
          <p variant="h5" component="div">
            {name}
          </p>
          <p sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
            ${Number(price).toFixed(2)}
          </p>
          <Rating value={rating} readOnly />
  
          <p variant="body2">{description}</p>
        </CardContent>
        <CardActions>
          <Button
            variant="primary"
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            See More
          </Button>
        </CardActions>
        <Collapse
          in={isExpanded}
          timeout="auto"
          unmountOnExit
          sx={{
            color: theme.palette.neutral[300],
          }}
        >
          <CardContent>
            <Typography>id: {_id}</Typography>
            <Typography>Supply Left: {supply}</Typography>
            <Typography>
              Yearly Sales This Year: {stat.yearlySalesTotal}
            </Typography>
            <Typography>
              Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
            </Typography>
          </CardContent>
        </Collapse>
      </div>
    );
  };