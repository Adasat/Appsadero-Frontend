import React from 'react'

function Card({bbq}) {
  return (
    <Card>
      <CardHeader title={bbq.name} />
      <CardMedia
        component="img"
        height="200"
        image="/path/to/image.jpg"
        alt="Card Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Card Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Action 1</Button>
        <Button size="small">Action 2</Button>
      </CardActions>
    </Card>
  )
}

export default Card