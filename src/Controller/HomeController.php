<?php

// src/Controller/ProgramController.php

namespace App\Controller;


use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class HomeController extends AbstractController
{
    #[Route('/', name: 'home_')]
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }

    #[Route('/bathroom', name: 'bathroom')]
    public function bathroom(): Response
    {
        return $this->render('bathroom.html.twig');
    }

    #[Route('/pro', name: 'pro')]
    public function proFirst(): Response
    {
        return $this->render('pro.html.twig');
    }

    #[Route('/profile', name: 'profile')]
    public function proSecond(): Response
    {
        return $this->render('profile.html.twig');
    }
}