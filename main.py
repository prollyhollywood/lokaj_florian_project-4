while True:
    print (input.acceleration(Dimension.Z))
    if input.acceleration(Dimension.Z) > 1000:
        light.set_all(light.rgb(255,255,0))
    elif input.acceleration(Dimension.Z) > 600:
        light.set_all(light.rgb(255,0,255))
    elif input.acceleration(Dimension.Z) > 300:
        light.set_all(light.rgb(0,255,255))
    else:
        light.clear()