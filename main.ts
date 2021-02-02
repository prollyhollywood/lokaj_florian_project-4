while (true) {
    console.log(input.acceleration(Dimension.Z))
    if (input.acceleration(Dimension.Z) > 10) {
        light.setAll(light.rgb(255, 255, 0))
    } else if (input.acceleration(Dimension.Z) > 6) {
        light.setAll(light.rgb(255, 0, 255))
    } else if (input.acceleration(Dimension.Z) > 3) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.clear()
    }
    
}
