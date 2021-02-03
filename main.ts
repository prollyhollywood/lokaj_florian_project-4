while (true) {
    console.log(input.acceleration(Dimension.Z))
    if (input.acceleration(Dimension.Z) > 1000) {
        light.setAll(light.rgb(255, 255, 0))
    } else if (input.acceleration(Dimension.Z) > 600) {
        light.setAll(light.rgb(255, 0, 255))
    } else if (input.acceleration(Dimension.Z) > 300) {
        light.setAll(light.rgb(0, 255, 255))
    } else {
        light.clear()
    }
    
}
