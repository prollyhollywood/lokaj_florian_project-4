while True:
    print (input.acceleration(Dimension.Z))
    if input.acceleration(Dimension.Z) > 10:
        light.set_all(light.rgb(255,255,0))
    elif input.acceleration(Dimension.Z) > 6:
        light.set_all(light.rgb(255,0,255))
    elif input.acceleration(Dimension.Z) > 3:
        light.set_all(light.rgb(255,0,255))
    else:
        light.clear()